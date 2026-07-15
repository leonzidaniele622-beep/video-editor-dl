#!/usr/bin/env python3
"""
Backend API Test Suite for Contact Messages API
Tests the /api/messages endpoints (POST and GET) and health check
"""

import requests
import json
import sys
from datetime import datetime

# Base URL from environment
BASE_URL = "https://videomaker-dl.preview.emergentagent.com/api"

def print_test_header(test_name):
    """Print a formatted test header"""
    print(f"\n{'='*80}")
    print(f"TEST: {test_name}")
    print(f"{'='*80}")

def print_result(passed, message):
    """Print test result"""
    status = "✅ PASS" if passed else "❌ FAIL"
    print(f"{status}: {message}")

def test_health_check():
    """Test 1: GET /api/root - Health check endpoint"""
    print_test_header("Health Check - GET /api/root")
    
    try:
        url = f"{BASE_URL}/root"
        print(f"Request: GET {url}")
        
        response = requests.get(url, timeout=10)
        print(f"Status Code: {response.status_code}")
        print(f"Response: {response.text}")
        
        # Check status code
        if response.status_code != 200:
            print_result(False, f"Expected status 200, got {response.status_code}")
            return False
        
        # Check JSON response
        try:
            data = response.json()
            print(f"Parsed JSON: {json.dumps(data, indent=2)}")
        except Exception as e:
            print_result(False, f"Response is not valid JSON: {e}")
            return False
        
        # Check for message field
        if "message" not in data:
            print_result(False, "Response JSON does not contain 'message' field")
            return False
        
        print_result(True, f"Health check passed. Message: {data['message']}")
        return True
        
    except Exception as e:
        print_result(False, f"Exception occurred: {str(e)}")
        return False

def test_post_valid_message():
    """Test 2: POST /api/messages with valid data"""
    print_test_header("POST Valid Message - POST /api/messages")
    
    try:
        url = f"{BASE_URL}/messages"
        payload = {
            "name": "Mario Rossi",
            "email": "mario@example.com",
            "message": "Ciao, vorrei un video."
        }
        
        print(f"Request: POST {url}")
        print(f"Payload: {json.dumps(payload, indent=2)}")
        
        response = requests.post(url, json=payload, timeout=10)
        print(f"Status Code: {response.status_code}")
        print(f"Response: {response.text}")
        
        # Check status code
        if response.status_code != 200:
            print_result(False, f"Expected status 200, got {response.status_code}")
            return False, None
        
        # Check JSON response
        try:
            data = response.json()
            print(f"Parsed JSON: {json.dumps(data, indent=2)}")
        except Exception as e:
            print_result(False, f"Response is not valid JSON: {e}")
            return False, None
        
        # Check for success field
        if "success" not in data or data["success"] != True:
            print_result(False, f"Expected success:true, got {data.get('success')}")
            return False, None
        
        # Check for id field
        if "id" not in data:
            print_result(False, "Response does not contain 'id' field")
            return False, None
        
        message_id = data["id"]
        print_result(True, f"Message created successfully with id: {message_id}")
        return True, message_id
        
    except Exception as e:
        print_result(False, f"Exception occurred: {str(e)}")
        return False, None

def test_post_invalid_message():
    """Test 3: POST /api/messages with missing fields"""
    print_test_header("POST Invalid Message - POST /api/messages (missing fields)")
    
    try:
        url = f"{BASE_URL}/messages"
        payload = {
            "name": "only name"
        }
        
        print(f"Request: POST {url}")
        print(f"Payload: {json.dumps(payload, indent=2)}")
        
        response = requests.post(url, json=payload, timeout=10)
        print(f"Status Code: {response.status_code}")
        print(f"Response: {response.text}")
        
        # Check status code
        if response.status_code != 400:
            print_result(False, f"Expected status 400, got {response.status_code}")
            return False
        
        # Check JSON response
        try:
            data = response.json()
            print(f"Parsed JSON: {json.dumps(data, indent=2)}")
        except Exception as e:
            print_result(False, f"Response is not valid JSON: {e}")
            return False
        
        # Check for error field
        if "error" not in data:
            print_result(False, "Response does not contain 'error' field")
            return False
        
        print_result(True, f"Validation error returned correctly: {data['error']}")
        return True
        
    except Exception as e:
        print_result(False, f"Exception occurred: {str(e)}")
        return False

def test_get_messages(expected_email="mario@example.com", expected_name="Mario Rossi"):
    """Test 4: GET /api/messages - Retrieve messages"""
    print_test_header("GET Messages - GET /api/messages")
    
    try:
        url = f"{BASE_URL}/messages"
        print(f"Request: GET {url}")
        
        response = requests.get(url, timeout=10)
        print(f"Status Code: {response.status_code}")
        print(f"Response: {response.text[:500]}...")  # Print first 500 chars
        
        # Check status code
        if response.status_code != 200:
            print_result(False, f"Expected status 200, got {response.status_code}")
            return False
        
        # Check JSON response
        try:
            data = response.json()
            print(f"Number of messages: {len(data)}")
        except Exception as e:
            print_result(False, f"Response is not valid JSON: {e}")
            return False
        
        # Check if response is an array
        if not isinstance(data, list):
            print_result(False, f"Expected array response, got {type(data)}")
            return False
        
        # Find the message we created
        found_message = None
        for msg in data:
            if msg.get("email") == expected_email and msg.get("name") == expected_name:
                found_message = msg
                break
        
        if not found_message:
            print_result(False, f"Could not find message with email={expected_email} and name={expected_name}")
            return False
        
        print(f"Found message: {json.dumps(found_message, indent=2)}")
        
        # Check that _id field is NOT present
        if "_id" in found_message:
            print_result(False, "Message contains MongoDB '_id' field (should be stripped)")
            return False
        
        # Check required fields are present
        required_fields = ["id", "name", "email", "message", "createdAt"]
        missing_fields = [field for field in required_fields if field not in found_message]
        
        if missing_fields:
            print_result(False, f"Message missing required fields: {missing_fields}")
            return False
        
        print_result(True, f"Message retrieved successfully with all required fields and no _id")
        return True
        
    except Exception as e:
        print_result(False, f"Exception occurred: {str(e)}")
        return False

def main():
    """Run all tests"""
    print("\n" + "="*80)
    print("BACKEND API TEST SUITE - Contact Messages API")
    print(f"Base URL: {BASE_URL}")
    print(f"Timestamp: {datetime.now().isoformat()}")
    print("="*80)
    
    results = []
    
    # Test 1: Health check
    results.append(("Health Check (GET /api/root)", test_health_check()))
    
    # Test 2: POST valid message
    post_result, message_id = test_post_valid_message()
    results.append(("POST Valid Message", post_result))
    
    # Test 3: POST invalid message
    results.append(("POST Invalid Message (400 validation)", test_post_invalid_message()))
    
    # Test 4: GET messages
    results.append(("GET Messages (verify structure)", test_get_messages()))
    
    # Print summary
    print("\n" + "="*80)
    print("TEST SUMMARY")
    print("="*80)
    
    passed = sum(1 for _, result in results if result)
    total = len(results)
    
    for test_name, result in results:
        status = "✅ PASS" if result else "❌ FAIL"
        print(f"{status}: {test_name}")
    
    print(f"\nTotal: {passed}/{total} tests passed")
    print("="*80)
    
    # Exit with appropriate code
    sys.exit(0 if passed == total else 1)

if __name__ == "__main__":
    main()
