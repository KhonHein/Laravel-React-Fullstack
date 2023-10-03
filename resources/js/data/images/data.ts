import { baseToken, baseUrl } from "../../pages/admin/config/config";

export let anounceImgSliders = [
    {
        id:0,
        image_url:'https://i1.sndcdn.com/artworks-N2T3kRTReT6bqX4C-UYKH7g-t500x500.jpg',
        caption:'Warm with Sunday',
        created_at:'',
        updated_at:'',
        archive:false,
    },
    {
      id:1,
      image_url: 'https://s3.amazonaws.com/99Covers-Facebook-Covers/watermark/27841.jpg',
      caption: 'Travel with book',
      created_at:'',
        updated_at:'',
        archive:false,
    },
    {
      id:2,
      image_url: 'https://www.letsroam.com/blogs/explorer/wp-content/uploads/sites/10/2021/03/couple-relaxing-with-a-date-book.jpg',
      caption: 'Relax with Sunday',
      created_at:'',
        updated_at:'',
        archive:false,
    },
    {
      id:3,
      image_url: 'https://static.bookofthemonth.com/landing/hiw/hiw1.jpg',
      caption: 'Edicuate with Sunday',
      created_at:'',
        updated_at:'',
        archive:false,
    },
    {
        id:4,
        image_url:'https://www.thecl.com/wp-content/uploads/2019/09/Romantic-Dinner-Date-Ideas.jpg',
        caption:'Start With Sunday',
        created_at:'',
        updated_at:'',
        archive:false,
    }
  ];



  if(baseToken){
    try {
        const response = await fetch(`${baseUrl}/api/anouncemnet`,{
            method:'GET',
            headers: {
                'Authorization': `Bearer ${baseToken}`,
                'Content-Type': 'application/json',
              },
        });
        if(response.ok){
             const res = await response.json();
             //console.log(res.data)
            anounceImgSliders = await res.data;
        }
  } catch (error) {
    console.log(error)
  }
  }

