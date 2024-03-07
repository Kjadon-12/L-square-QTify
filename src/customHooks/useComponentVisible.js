import React,{useState, useEffect , useRef} from 'react'

const useComponentVisible = ({initialValue}) => {
    const [isAlbumListVisible , setIsAlbumListVisible] = useState(initialValue)
    const albumListRef = useRef(null);

    const handleClickOutside = (event) => {
         if(albumListRef.current && !albumListRef.current.contains(event.target)){
            setIsAlbumListVisible(false);
         }
    }

   useEffect(() => {
        document.addEventListener('click' , handleClickOutside ,true);

        return(() => {
            document.removeEventListener('click' , handleClickOutside , true)
        })
   }, [])



  return({albumListRef, isAlbumListVisible, setIsAlbumListVisible})
}

export default useComponentVisible;