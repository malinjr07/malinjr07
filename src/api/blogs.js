// images
import blogImg1 from "../images/blog/1.jpg";
import blogImg2 from "../images/blog/2.jpg";

import blogSingleImg1 from "../images/blog/img-5.jpg";
import blogSingleImg2 from "../images/blog/img-4.jpg";



const blogs = [
    {
        id: '1',
        type: 'image',
        title: 'How can you Generate Perfect AI Photo',
        slug:'1',
        screens: blogImg1,
        description: 'Lorem ipsum dolor sit amet consectetur. Sollicitudin congue ac aliquam nunc vulputate sit. Morbi rutrum aliquet est malesuada commodo turpis. Integer semper adipiscing nunc eu tempor. Risus platea id rhoncus sem varius dui nibh tortor dictumst.',
        author: 'Loura Sweety',
        create_at: '25 Sep 2024',
        blogSingleImg:blogSingleImg1, 
        comment:'35',
        day:'28',
        month:'AUGUST',
        blClass:'format-standard-image',
        animation:'1200',
        tags: ["Website", "Branding"],
    },
    {
        id: '2',
        title: 'Next Generation will be the Robot User.',
        slug:'2',
        screens: blogImg2,
        description: 'Lorem ipsum dolor sit amet consectetur. Sollicitudin congue ac aliquam nunc vulputate sit. Morbi rutrum aliquet est malesuada commodo turpis. Integer semper adipiscing nunc eu tempor. Risus platea id rhoncus sem varius dui nibh tortor dictumst.',
        author: 'David Luis',
        create_at: '23 Sep 2024',
        blogSingleImg:blogSingleImg2, 
        comment:'80',
        day:'25',
        month:'March',
        blClass:'format-standard-image',
        animation:'1400',
        tags: ["Website", "Branding"],
    },
    {
        type: 'video',
        id: '2',
        title: 'Next Generation will be the Robot User.',
        slug:'3',
        screens: blogImg2,
        description: 'Lorem ipsum dolor sit amet consectetur. Sollicitudin congue ac aliquam nunc vulputate sit. Morbi rutrum aliquet est malesuada commodo turpis. Integer semper adipiscing nunc eu tempor. Risus platea id rhoncus sem varius dui nibh tortor dictumst.',
        author: 'David Luis',
        create_at: '23 Sep 2024',
        blogSingleImg:blogSingleImg2, 
        comment:'80',
        day:'25',
        month:'March',
        blClass:'format-standard-image',
        animation:'1400',
        tags: ["Website", "Branding"],
    }
];
export default blogs;