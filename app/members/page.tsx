import Link from "next/link";
import React from "react";

export default function MembersPage() {
  return (
    <div>
      <h3 className="text-3xl">
        This will be the members page
      </h3>
      <Link href="/" className="text-blue-600 hover:text-blue-800 underline">
        Go back home
      </Link>
    </div>
  );
}