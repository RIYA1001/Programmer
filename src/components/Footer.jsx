
const Footer = () => {
    return (
        <footer className="bg-gray-900 text-yellow-500 p-4 insert-x-0 bottom-0">
            <div className="container mx-auto flex justify-between items-center">
                {/* Left Section (Copyright) */}
                <div className="text-left">
                    <p>&copy; 2024 Programmer. All rights reserved.</p>
                </div>
                
                {/* Right Section (Social Media Icons) */}
                <div className="flex space-x-4">
                    <a href="#" className="text-white hover:text-yellow-400">
                        <i className="fab fa-facebook-f"></i>
                    </a>
                    <a href="#" className="text-white hover:text-yellow-400">
                        <i className="fab fa-twitter"></i>
                    </a>
                    <a href="#" className="text-white hover:text-yellow-400">
                        <i className="fab fa-youtube"></i>
                    </a>
                    <a href="#" className="text-white hover:text-yellow-400">
                        <i className="fab fa-instagram"></i>
                    </a>
                    <a href="#" className="text-white hover:text-yellow-400">
                        <i className="fab fa-linkedin"></i>
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;