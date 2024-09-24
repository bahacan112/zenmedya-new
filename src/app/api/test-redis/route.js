// src/app/api/users/route.js
import {
  addUser,
  getUserById,
  updateUser,
  deleteUser,
  getAllUsers,
} from "@/models/user";

export async function POST(request) {
  const body = await request.json();

  const newUser = await addUser(body);
  return new Response(JSON.stringify(newUser), { status: 201 });
}

export async function GET(request) {
  const users = await getAllUsers();
  return new Response(JSON.stringify(users), { status: 200 });
}

export async function GET_USER(request, { params }) {
  const { id } = params;
  const user = await getUserById(id);
  return user
    ? new Response(JSON.stringify(user), { status: 200 })
    : new Response("User not found", { status: 404 });
}

export async function PUT(request, { params }) {
  const { id } = params;
  const updatedData = await request.json();

  try {
    const updatedUser = await updateUser(id, updatedData);
    return new Response(JSON.stringify(updatedUser), { status: 200 });
  } catch (error) {
    return new Response(error.message, { status: 404 });
  }
}

export async function DELETE(request, { params }) {
  const { id } = params;

  await deleteUser(id);
  return new Response("User deleted", { status: 204 });
}
