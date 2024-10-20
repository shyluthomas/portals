import { NextResponse } from 'next/server';

export async function GET() {
  // Sample data
  const data = [
    {'name': 'shylu', 'age': 35
    },
    {'name': 'shylu', 'age': 35
    }
];

  // Return JSON response
  return NextResponse.json(data);
}