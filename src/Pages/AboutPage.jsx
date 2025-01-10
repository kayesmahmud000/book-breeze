import AboutImg from '../assets/about.jpg'
import PageHeading from '../components/PageHeading';
import TitleHelmet from '../components/TitleHelmet';

const AboutPage = () => {
    return (
        <div className='container  mx-auto ' >
            <TitleHelmet title={"About"}></TitleHelmet>
        <div className="py-5 ">
         <PageHeading title={"About Us"} subtitle={""}></PageHeading>
         </div>
       <div className="hero ">
           <div className="hero-content flex-col gap-5  justify-between lg:flex-row">
               <img
                   src={AboutImg}
                   className="lg:w-4/6 rounded-lg shadow-2xl" />
               <div className=' space-y-3'>
                   <h1 className="text-3xl  font-bold"> Book Breeze</h1>
                 
                   <p className="py-6 space-y-5">
                   Welcome to <span className="text-[#4DA1A9] font-semibold">Book Breeze</span>  , your ultimate destination for book lovers, readers, and literary explorers. We are committed to creating a platform where stories come to life, knowledge flows freely, and readers can discover books that captivate their minds and hearts. <br /> Whether you're an avid reader, a casual browser, or someone exploring the world of literature,<span className="text-[#4DA1A9] font-semibold">Book Breeze</span> offers a rich and diverse collection to meet your reading preferences.
                   </p>
                 
               </div>
           </div>
       </div>
      <div className='max-w-7xl mx-auto'>
      <div className='my-10 text-center lg:text-start'>
           <h2 className=' text-4xl font-bold text-center lg:text-start'>Our Story </h2>
           <p className='my-5' >
           <span className="text-[#4DA1A9] font-semibold">Book Breeze</span> was born from a simple yet powerful idea: to make the joy of reading accessible to everyone. Founded by a group of passionate readers and tech enthusiasts, our journey began with a shared love for books and a desire to create a digital space where literature could be celebrated. We recognized the need for a platform that not only offers a vast collection of books but also connects readers with personalized recommendations, detailed insights, and a vibrant community.
           </p>
           <br />
           <p>Our team believes in the power of stories to inspire, educate, and bring people together. From the timeless wisdom of classic literature to the creativity of modern fiction, every book has a story waiting to be discovered — and we are here to help you find it.</p>
       </div>
       <div className='my-10 text-center lg:text-start'>
           <h2 className=' text-4xl font-bold text-center lg:text-start'> What We Offer </h2>
           <p className='mt-5' >
          
At Book Breeze, we aim to provide more than just a collection of books. Our platform is designed to offer a complete reading experience tailored for book enthusiasts of all kinds:
           </p>
           <ul>
    <li> <span className="text-[#4DA1A9] font-semibold">📚 Diverse Collection:</span> Explore thousands of books across multiple genres, including fiction, non-fiction, fantasy, mystery, self-help, biographies, and more. Whether you're searching for the latest bestseller or a hidden literary gem, you'll find it here.</li>
    <li> <span className="text-[#4DA1A9] font-semibold">🔎 Interactive Browsing:</span> Our advanced search and filter options allow you to explore titles by genre, author, rating, and category, making it easier than ever to find your next great read.</li>
    <li> <span className="text-[#4DA1A9] font-semibold">🌟 Ratings & Reviews:</span> Share your thoughts and experiences with fellow readers by leaving ratings and reviews. Discover what others think before you dive into a new book.</li>
    <li> <span className="text-[#4DA1A9] font-semibold">📖 User-Friendly Design:</span> Our platform is designed for an enjoyable reading experience across all devices. Whether you're browsing on a desktop, tablet, or smartphone, Book Breeze offers a seamless and visually engaging experience.</li>
    <li> <span className="text-[#4DA1A9] font-semibold">📖 User-Friendly Design:</span>Gain detailed insights about each book, including summaries, author backgrounds, and reader feedback to make informed choices.</li>
</ul>
          
       </div>
       <div className=' my-5'>
           <div>
               <h2 className='text-4xl font-bold'>Our Mission</h2>
               <p>At Book Breeze, we envision a world where literature is more accessible, where stories connect people, and where the joy of reading is celebrated every day. Our goal is to inspire a lifelong love for reading by offering a platform that values diversity, knowledge, and creativity. <br />

We believe that books have the power to transform lives — to teach, to heal, to empower, and to spark imagination. Whether you're exploring new ideas, expanding your knowledge, or escaping into a fictional world, we want to be part of your literary journey.</p>
           </div>
          
       </div>
       <div className='my-10 text-center lg:text-start'>
           <h2 className=' text-4xl font-bold text-center lg:text-start'>Join Us! </h2>
           <p className='my-5' >
           Become a part of the 
           <span className="text-[#4DA1A9] font-semibold">Book Breeze</span> community today! Explore our vast library, share your reviews, and connect with fellow readers who share your passion for literature. Let’s celebrate the magic of storytelling together — one book at a time.</p>
       </div>
      </div>
   </div>
    );
};

export default AboutPage;