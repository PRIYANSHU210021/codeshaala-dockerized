import { Link } from "react-router";
import { FaCode, FaLaptopCode, FaUserFriends, FaChartLine } from "react-icons/fa";
import { SiLeetcode, SiCodechef, SiGeeksforgeeks } from "react-icons/si";
import { AiFillGithub, AiFillTwitterCircle, AiFillLinkedin } from "react-icons/ai";

const Landing = () => {
    return (
        <div className="font-poppins text-gray-800">

            {/* Hero Section */}
            <section className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-purple-700 via-purple-800 to-purple-900 text-white px-4 text-center">
                <h1 className="text-5xl md:text-6xl font-bold mb-4">Master Coding with <span className="text-yellow-400">CodeShaala</span></h1>
                <p className="text-lg md:text-xl mb-6">Practice, Compete, and Crack Interviews</p>
                <div className="bg-gray-800 rounded-xl p-6 w-full max-w-2xl shadow-lg">
                    <pre className="text-left text-sm text-green-400 animate-pulse">
                        {`function solveProblem() {
  console.log("Welcome to CodeShaala 🚀");
}`}
                    </pre>
                </div>
                <div className="absolute top-6 right-6 space-x-4 z-10">
                    <Link to="/login">
                        <button className="bg-yellow-400 text-black px-5 py-2 rounded-xl hover:scale-105 transition">Login</button>
                    </Link>
                    <Link to="/signup">
                        <button className="bg-white text-purple-800 px-5 py-2 rounded-xl hover:scale-105 transition">Signup</button>
                    </Link>
                </div>

            </section>

            {/* Features */}
            <section className="py-20 bg-white text-center px-6">
                <h2 className="text-3xl font-bold mb-10">Why Choose CodeShaala?</h2>
                <div className="grid md:grid-cols-4 gap-8">
                    <div className="bg-purple-50 p-6 rounded-xl shadow">
                        <FaCode size={40} className="mx-auto text-purple-700 mb-4" />
                        <h3 className="font-semibold text-lg">Coding Challenges</h3>
                        <p className="text-sm text-gray-600">Sharpen your DSA skills with hands-on practice.</p>
                    </div>
                    <div className="bg-purple-50 p-6 rounded-xl shadow">
                        <FaUserFriends size={40} className="mx-auto text-purple-700 mb-4" />
                        <h3 className="font-semibold text-lg">Live Collaboration</h3>
                        <p className="text-sm text-gray-600">Pair program with friends or mentors in real time.</p>
                    </div>
                    <div className="bg-purple-50 p-6 rounded-xl shadow">
                        <FaLaptopCode size={40} className="mx-auto text-purple-700 mb-4" />
                        <h3 className="font-semibold text-lg">Interview Prep</h3>
                        <p className="text-sm text-gray-600">Topic-wise tracks to ace coding interviews.</p>
                    </div>
                    <div className="bg-purple-50 p-6 rounded-xl shadow">
                        <FaChartLine size={40} className="mx-auto text-purple-700 mb-4" />
                        <h3 className="font-semibold text-lg">Analytics</h3>
                        <p className="text-sm text-gray-600">Track your progress, speed, and accuracy.</p>
                    </div>
                </div>
            </section>

            {/* Showcase */}
            <section className="py-20 bg-gray-100 px-6 text-center">
                <h2 className="text-3xl font-bold mb-10">Supported Languages</h2>
                <div className="bg-white p-6 rounded-xl max-w-2xl mx-auto shadow">
                    <pre className="text-left text-sm bg-black text-white p-4 rounded">
                        {`# Python
def greet():
    print("Namaste CodeShaala")`}
                    </pre>
                    <p className="mt-4 text-gray-700">Also supports: JavaScript, Java, C++, Go and more!</p>
                </div>
            </section>

            {/* Testimonials & Stats */}
            <section className="py-16 bg-purple-900 text-white px-6 text-center">
                <h2 className="text-3xl font-bold mb-6">Join 50,000+ Coders</h2>
                <p className="text-lg mb-8">Trusted by top learners and partnered with major platforms</p>
                <div className="flex justify-center gap-10 text-4xl">
                    <SiLeetcode />
                    <SiCodechef />
                    <SiGeeksforgeeks />
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-gray-900 text-white py-10 px-6">
                <div className="max-w-4xl mx-auto flex flex-col md:flex-row justify-between items-center">
                    <div className="mb-6 md:mb-0">
                        <h3 className="text-xl font-semibold">CodeShaala</h3>
                        <p className="text-sm text-gray-400">© {new Date().getFullYear()} All rights reserved.</p>
                    </div>
                    <div className="flex space-x-6 text-2xl">
                        <a href="#"><AiFillGithub /></a>
                        <a href="#"><AiFillLinkedin /></a>
                        <a href="#"><AiFillTwitterCircle /></a>
                    </div>
                </div>
                <div className="mt-6 text-center">
                    <input type="email" placeholder="Subscribe to newsletter" className="p-2 rounded-l bg-white text-black" />
                    <button className="bg-yellow-400 text-black px-4 py-2 rounded-r hover:bg-yellow-300">Subscribe</button>
                </div>
            </footer>
        </div>
    );
};

export default Landing;
