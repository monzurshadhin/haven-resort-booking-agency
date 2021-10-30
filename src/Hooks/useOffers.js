import { useEffect, useState } from "react";

const useOffers = () =>{
    const [offers,setOffers] = useState([]);
    const [blogs,setBlogs] = useState([]);
    const [isLoading,setIsLoading] = useState(true);
    
    useEffect(() => {
        fetch("https://shielded-bastion-47032.herokuapp.com/offers")
          .then((res) => res.json())
          .then((data) => {
            setOffers(data);
            setIsLoading(false);
          });
      }, []);

      useEffect(() => {
        fetch("https://shielded-bastion-47032.herokuapp.com/blogs")
          .then((res) => res.json())
          .then((data) => {
            setBlogs(data);
            setIsLoading(false);
          });
      }, []);




    return {
        offers,
        isLoading,
        blogs
    }
}
export default useOffers;