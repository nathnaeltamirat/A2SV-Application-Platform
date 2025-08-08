import Link from "next/link";

// components/UserManagement/CreateUserButton.tsx
const CreateUserButton = () => {
  return (
    <Link href="/adminFunctionality/createNewUser" className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md text-sm font-medium flex items-center">
      <svg
        className="w-4 h-4 mr-2"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M12 6v6m0 0v6m0-6h6m-6 0H6"
        />
      </svg>
      Create New User
    </Link>
  );
};

export default CreateUserButton;
