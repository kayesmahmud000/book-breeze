import { Link } from 'react-router-dom';
import TitleHelmet from '../components/TitleHelmet';


const ErrorPage = () => {
    return (
        <div className="flex items-center justify-center min-h-screen bg-black">
            <TitleHelmet title={'Error Page'}></TitleHelmet>
        <div className="text-center p-8  shadow-xl rounded-lg max-w-xl">
            <h1 className="text-6xl font-bold text-[#4DA1A9]">404</h1>
            <p className="mt-4 text-lg text-gray-400">Sorry, we couldn't find the page you were looking for.</p>
            <div className="mt-6">
                <p className="text-gray-400">Here are some useful links:</p>
                <ul className="mt-4">
                    <li><a href="/" className="text-[#4DA1A9] hover:underline">Home</a></li>
                    <li><a href="/about" className="text-[#4DA1A9] hover:underline">About Us</a></li>
                    <li><a href="/contact" className="text-[#4DA1A9] hover:underline">Contact Us</a></li>
                </ul>
            </div>
            <a href="/contact" className="mt-6 inline-block px-6 py-2 bg-[#4DA1A9] text-white rounded-lg hover:bg-blue-500 transition-all">
                Contact Support
            </a>
        </div>
    </div>
    );
};

export default ErrorPage;