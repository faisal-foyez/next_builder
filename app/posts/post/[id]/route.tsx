import { NextRequest } from "next/server";

export function GET(
  request:NextRequest,
  { params }:{ params:{ slug:string } }
){
  request.json();
  const searchParams = request.nextUrl.searchParams;
  const query = searchParams.get('query');
}