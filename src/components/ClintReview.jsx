import { FaArrowRight } from "react-icons/fa";
import PageHeading from "./PageHeading";
import ClintSwiper from "./ClintSwiper";
import { Fade } from "react-awesome-reveal";

const ClintReview = () => {
    return (
        <div>
            <Fade direction="down">
            <div className='flex justify-center items-start mt-16 -mb-5'>
                <p className='text-center font-bold text-gray-500 flex gap-1 items-center'><FaArrowRight /> Review </p>
            </div>
            </Fade>
            <PageHeading title={"Clint Says"} subtitle={'What Our Readers Are Saying'}></PageHeading>
            <div className="my-10">
            <ClintSwiper></ClintSwiper>
            </div>
        </div>
    );
};

export default ClintReview;