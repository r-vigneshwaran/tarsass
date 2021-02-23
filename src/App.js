import {unsplash,searchImages} from './api/index';
import React,{useEffect,useState} from 'react';
import Paginate from './components/pagination/Pagination';
import Posts from './components/Posts/Posts';
import useStyles from './styles';
import Header from './components/Header/Header';
import PopupModal from './components/Modal/PopupModal';


const App=()=> {
  const classes = useStyles();

  const [currentPage,setCurrentPage]=useState(1);
  const [query,setQuery]=useState('');
  const [posts,setPosts]=useState([]);
  const [open,setOpen]=useState(false);
  const [modal,setModal]=useState();
  const [isFirst,setIsFirst]=useState(true)
  
  // const fetchData= async(currentPage,perPage)=> {
  //   const res = await fetchList(currentPage,perPage);
  //   // console.log(res,"from fetchList")
  //   setPosts(res);
  // }
  // const HandleSearch = async (pageNo,query) =>{
  //   setPosts([]);
  //   const {data} = await searchImages(pageNo,query);
  //   setPosts(data.results);
  //   // console.log(posts,"search result ");
  // }
  
  // useEffect(()=>{
  //   fetchData(currentPage,8);
  // },[currentPage]);

  const HandleImageClick=(isOpen,modal)=>{
    setOpen(isOpen);
    setModal(modal);
  }
  
  const fetchList =(pageNo,PerPage)=>{
    unsplash.photos.list({
        page: pageNo,
        perPage: PerPage,
      }).then((result)=>{
        if(result.error){
          console.log(result.error)
          return result.error
        }else{
          console.log(result.response.results,"from unsplash api")
          setPosts((prevPosts)=>[...prevPosts,...result.response.results])
        }
    })
}
  useEffect(()=>{
    if(!query.length){
      fetchList(currentPage,8)
    }
  },[currentPage]);

  const HandleSearch=(currentPage,query)=>{
    if(isFirst) {
      setCurrentPage(1);
      setIsFirst(false);
    }
    if(!query) return  fetchList(currentPage,8)
    unsplash.search.getPhotos({
      query: query,
      page: currentPage,
      perPage: 8,
      orientation: 'portrait',
    }).then((result)=>{
      if(result.error){
        console.log(result.error)
        return result.error
      }else{
        setPosts([])
        console.log(result.response.results,"from search result api")
        setPosts((prevPosts)=>[...prevPosts,...result.response.results])
      }
  })
  }
  useEffect(()=>{
    if(query.length) HandleSearch(currentPage,query)
  },[query,currentPage])
  
  return (
    <div className="App" >
   <Header currentPage={currentPage} HandleSearch={HandleSearch} setQuery={setQuery}/>
    <PopupModal modal={modal} open={open} setOpen={setOpen}/>
     <Posts currentPage={currentPage} HandleImageClick={HandleImageClick} posts={posts} setOpen={setOpen} open={open} />
  <Paginate currentPage={currentPage} setCurrentPage={setCurrentPage}/>
    </div>
  );
}

export default App;
