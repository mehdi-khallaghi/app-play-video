import { useSelector , useDispatch } from "react-redux"

export default function UserComponent(){

    const userList= useSelector((state)=>state.users.value)
    // console.log(userList);
    return (
        <div className="p-5">
            {userList.map((usr)=>{
                return (
                <div className="p-2 mt-2 rounded bg-warning">
                    <h4>{usr.username} - {usr.name}</h4>
                </div>
                )
            })}
        </div>
    )
}  