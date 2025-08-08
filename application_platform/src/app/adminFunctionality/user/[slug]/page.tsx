import React from 'react'
interface Props {
  params: Promise<{ id: string }>;
}
const EditUser = async ({params}:Props) => {
    const {id} = await params;
  return (
    <div>
      <EditUser USER_ID={id} />
    </div>
  );
}

export default EditUser
