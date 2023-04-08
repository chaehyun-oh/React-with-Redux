import { useRemoveAlbumMutation } from "../store";
import { GoTrashcan } from "react-icons/go";
import Button from "./Button";
import ExpandablePanel from "./ExpandablePanel";
import PhotoList from "./PhotoList";

function AlbumListItem({ album }) {
    const [removeAlbum, results] = useRemoveAlbumMutation();

    const handleRemoveAlbum = () => {
        removeAlbum(album);
    }

    const header = <>
        <Button loading={results.isLoading} onClick={handleRemoveAlbum} className='mr-2'><GoTrashcan /></Button>
        {album.title}</>

    return (
        <ExpandablePanel key={album.id} header={header}>
            <PhotoList album={album} />
        </ExpandablePanel>
    );
}

export default AlbumListItem;