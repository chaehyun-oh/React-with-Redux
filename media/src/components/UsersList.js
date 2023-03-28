import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { fetchUsers, addUser } from '../store';
import Button from './Button';
import Skeleton from './Skeleton';
import { useThunk } from '../hooks/use-thunk';


function UsersList() {
    const [doFetchUsers, isLoadingUsers, loadingUsersError] = useThunk(fetchUsers);
    const [doCreatUser, isCreatingUser, creatingUserError] = useThunk(addUser);

    const { data } = useSelector((state) => {
        return state.users;
        // {data: [], isLoading: false, error: null }
    });

    useEffect(() => {
        doFetchUsers();
    }, [doFetchUsers]);

    //  [dispatch] is not actually required. But just to make the warning go away

    const handleUserAdd = () => {
        doCreatUser();
    };

    let content;

    if (isLoadingUsers) {
        content = <Skeleton times={6} className="h-10 w-full" />
    } else if (loadingUsersError) {
        content = <div>Error fetching data...</div>;
    } else {
        content = data.map((user) => {
            return (<div key={user.id} className='mb-2 border rounded'>
                <div className='flex p-2 justify-between item-center cursor-pointer'>
                    {user.name}
                </div>
            </div>)
        });
    };



    return (
        <div>
            <div className='flex flex-row justify-between items-center m-3'>
                <h1 className='m-2 text-xl'>Users</h1>
                <Button loading={isCreatingUser} onClick={handleUserAdd}>
                    + Add User
                </Button>
                {creatingUserError && 'Error creating user...'}
            </div>
            {content}
        </div>
    )
}

export default UsersList;