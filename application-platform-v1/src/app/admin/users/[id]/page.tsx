import EditUser from "@/components/admin/editUser";
import { USERIDPARAMS } from "@/types/admin.type";


const EditingById = async ({params}:USERIDPARAMS) => {
    const {id} = await params;
    console.log("Id in slug",id)
  return (
    <div>
      <EditUser USER_ID={id} />
    </div>
  );
}

export default EditingById
