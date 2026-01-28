import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';

const BlogsSection = () => {
    const blogs = [
        {
            date: "14 Jan, 2026",
            title: "From Blueprint to Build: How the Construction Process Really Works",
            image: "/blog1.png",
        },
        {
            date: "02 Jan, 2026",
            title: "The Most Common Construction Mistakes (and How to Avoid Them)",
            image: "/blog2.png",
        },
        {
            date: "02 Jan, 2026",
            title: "Why Proper Planning Is the Key to Successful Construction",
            image: "/blog3.png",
        }
    ];

    return (
        <section className="bg-white py-20 md:py-32 px-6 md:px-12">
            <div className="max-w-7xl mx-auto">


                <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-12 md:mb-16">
                    <div className="flex flex-col gap-6">

                        <div className="w-fit">
                            <span className="px-4 py-1.5 border border-gray-300 rounded-lg text-sm font-medium text-gray-600">
                                Blogs
                            </span>
                        </div>


                        <h2 className="text-3xl md:text-5xl lg:text-5xl font-bold text-gray-900 leading-tight max-w-2xl tracking-tight">
                            Insights, updates, and expertise from our construction team.
                        </h2>
                    </div>


                    <Link
                        href="/blogs"
                        className="bg-[#001D3D] hover:bg-[#002D5B] text-white px-8 py-4 rounded-2xl flex items-center gap-3 transition-all duration-300 text-sm font-semibold active:scale-95 shadow-lg shadow-blue-900/10"
                    >
                        Read More
                        <ArrowUpRight size={18} />
                    </Link>
                </div>


                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
                    {blogs.map((blog, index) => (
                        <Link key={index} href="#" className="group flex flex-col gap-4">

                            <div className="relative w-full overflow-hidden rounded-2xl md:rounded-3xl bg-gray-200" style={{ aspectRatio: '16/10' }}>
                                <Image
                                    src={blog.image}
                                    alt={blog.title}
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                                />
                            </div>


                            <div className="flex flex-col gap-2 pt-2">
                                <p className="text-[#A0AEC0] text-sm font-medium">
                                    {blog.date}
                                </p>
                                <h3 className="text-gray-900 text-lg md:text-xl font-bold leading-snug group-hover:text-blue-700 transition-colors">
                                    {blog.title}
                                </h3>
                            </div>
                        </Link>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default BlogsSection;