import { MongoClient } from 'mongodb'
import { v4 as uuidv4 } from 'uuid'
import { NextResponse } from 'next/server'

// MongoDB connection
let client
let db

async function connectToMongo() {
  if (!client) {
    client = new MongoClient(process.env.MONGO_URL)
    await client.connect()
    db = client.db(process.env.DB_NAME)
  }
  return db
}

function handleCORS(response) {
  response.headers.set('Access-Control-Allow-Origin', process.env.CORS_ORIGINS || '*')
  response.headers.set('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS')
  response.headers.set('Access-Control-Allow-Headers', 'Content-Type, Authorization')
  response.headers.set('Access-Control-Allow-Credentials', 'true')
  return response
}

export async function OPTIONS() {
  return handleCORS(new NextResponse(null, { status: 200 }))
}

async function handleRoute(request, { params }) {
  const { path = [] } = await params
  const route = `/${path.join('/')}`
  const method = request.method

  try {
    const db = await connectToMongo()

    if ((route === '/' || route === '/root') && method === 'GET') {
      return handleCORS(NextResponse.json({ message: 'Portfolio API attiva' }))
    }

    // Contact messages - POST /api/messages
    if (route === '/messages' && method === 'POST') {
      const body = await request.json()

      if (!body.name || !body.email || !body.message) {
        return handleCORS(
          NextResponse.json(
            { error: 'Nome, email e messaggio sono obbligatori.' },
            { status: 400 }
          )
        )
      }

      const msg = {
        id: uuidv4(),
        name: String(body.name).slice(0, 200),
        email: String(body.email).slice(0, 200),
        message: String(body.message).slice(0, 5000),
        createdAt: new Date().toISOString(),
      }

      await db.collection('messages').insertOne(msg)
      return handleCORS(NextResponse.json({ success: true, id: msg.id }))
    }

    // Contact messages - GET /api/messages
    if (route === '/messages' && method === 'GET') {
      const messages = await db
        .collection('messages')
        .find({})
        .sort({ createdAt: -1 })
        .limit(500)
        .toArray()
      const cleaned = messages.map(({ _id, ...rest }) => rest)
      return handleCORS(NextResponse.json(cleaned))
    }

    return handleCORS(
      NextResponse.json({ error: `Route ${route} not found` }, { status: 404 })
    )
  } catch (error) {
    console.error('API Error:', error)
    return handleCORS(
      NextResponse.json({ error: 'Internal server error' }, { status: 500 })
    )
  }
}

export const GET = handleRoute
export const POST = handleRoute
export const PUT = handleRoute
export const DELETE = handleRoute
export const PATCH = handleRoute
