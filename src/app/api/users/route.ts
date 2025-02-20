import { NextResponse } from 'next/server'

// GET /api/users
export async function GET() {
  try {
    // Logic untuk mengambil data users dari database
    const users = [
      { id: 1, name: 'John' },
      { id: 2, name: 'Jane' }
    ]
    
    return NextResponse.json({ users })
  } catch {
    return NextResponse.json(
      { error: 'Internal Server Error' },
      { status: 500 }
    )
  }
}

// POST /api/users
export async function POST(request: Request) {
  try {
    const data = await request.json()
    // Logic untuk menyimpan user baru ke database
    
    return NextResponse.json(
      { message: 'User created successfully', data },
      { status: 201 }
    )
  } catch {
    return NextResponse.json(
      { error: 'Internal Server Error' },
      { status: 500 }
    )
  }
} 