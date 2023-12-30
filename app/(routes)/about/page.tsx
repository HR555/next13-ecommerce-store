import Container from "@/components/ui/container";
import { Instagram, Linkedin, Youtube, ListMusic as TikTok } from 'lucide-react';


const AboutPage = () => {

    return (
        <Container>
            <div className="bg-gray-100 text-gray-800 font-sans pb-10">

                <header className="bg-zinc-800 text-white text-center py-4">
                    <h1 className="text-3xl font-bold">Ciyols Creation (Pvt) Ltd</h1>
                </header>

                <div className="container mx-auto my-8 p-8 bg-white shadow-md rounded-md">

                    <section className="mb-8">
                        <h2 className="mt-2 text-xl font-bold tracking-tight text-gray-900 sm:text-2xl">Who We Are</h2>
                        <p className="text-base leading-7 text-gray-700">
                            We are more than just an establishment. we are your partners in elevating both your personal and professional brand.
                            In today&apos;s world, cultivating a unique brand is essential for standing out in society. If your aspiration is to become an icon,
                            Ciyols is the ultimate destination. We extend an open invitation to &quot;Bond with Love&quot; with us, your journey towards excellence begins!
                        </p>
                    </section>

                    <section className="mb-8">
                        <h2 className="mt-2 text-xl font-bold tracking-tight text-gray-900 sm:text-2xl">What We Do</h2>

                        <div className="mt-6">
                            <p className="mt-4 font-semibold text-gray-900">Customized Clothing Orders</p>
                            <p className="mt-2 text-base">
                                We specialize in bringing your unique style to life through personalized clothing orders. From tailored designs to bespoke creations, we ensure that each piece reflects your individuality. Our dedicated team is committed to turning your fashion vision into reality, one custom order at a time.
                            </p>
                        </div>

                        <div className="mt-6">
                            <p className="mt-4 font-semibold text-gray-900">Eco-Friendly Heat Transfer Labels</p>
                            <p className="mt-2 text-base">
                                We prioritize sustainability by offering eco-friendly heat transfer labels. Our labels not only showcase your brand with high-quality and durability but also contribute to a greener environment. Choose our eco-conscious solutions for a seamless blend of style and environmental responsibility.
                            </p>
                        </div>

                        <div className="mt-6">
                            <p className="mt-4 font-semibold text-gray-900">Supply Heat Transfer Materials in Roll Goods Form</p>
                            <p className="mt-2 text-base">
                                We provide a wide range of heat transfer materials in roll goods form, including PU, Foil, Reflective, Glitter, and more. Whether you&apos;re seeking versatility, vibrancy, or unique textures, our selection ensures you have the right materials to bring your creative projects to life. Explore the possibilities with our premium roll goods for all your heat transfer needs.
                            </p>
                        </div>

                        <div className="mt-6">
                            <p className="mt-4 font-semibold text-gray-900">Marketing Solutions for New Company Launch</p>
                            <p className="mt-2 text-base">
                                Launching a new company is a significant endeavor, and our expertise lies in providing comprehensive marketing solutions tailored to your brand. From crafting compelling brand stories to executing strategic digital campaigns, we ensure your entry into the market is impactful. Let us be your partner in establishing a strong and memorable presence for your new venture.
                            </p>
                        </div>

                        <div className="mt-6">
                            <p className="mt-4 font-semibold text-gray-900">Public Relations Consultation</p>
                            <p className="mt-2 text-base">
                                Elevate your brand image and build meaningful connections with our expert public relations consultation services. We offer strategic guidance on crafting compelling narratives, managing communications, and fostering positive relationships with your audience. Let us navigate the realm of public relations to ensure your brand resonates positively in the eyes of the public.
                            </p>
                        </div>

                        <div className="mt-6">
                            <p className="mt-4 font-semibold text-gray-900">Decoration Solutions</p>
                            <p className="mt-2 text-base">
                                Transform your spaces with our comprehensive decoration services. Whether it&apos;s for homes, offices, or events, we provide tailored solutions to meet your decoration needs. From conceptualization to execution, we bring creativity and expertise to enhance the aesthetic appeal of any environment. Elevate your surroundings with our personalized decoration services.
                            </p>
                        </div>

                        <div className="mt-6">
                            <p className="mt-4 font-semibold text-gray-900">Event Planning and Management</p>
                            <p className="mt-2 text-base">
                                Entrust your events to us for seamless planning and flawless execution. We specialize in comprehensive event management, ensuring every detail is meticulously coordinated. From concept development to on-the-day logistics, our team is dedicated to creating memorable experiences. Let us bring your vision to life and make your events truly extraordinary.
                            </p>
                        </div>

                    </section>

                    <section className="mb-8">
                        <div className="mt-4">
                            <div className="mb-2">
                                <dt className="text-gray-500">Company Number:</dt>
                                <dd>PV00289453</dd>
                            </div>
                        </div>
                    </section>

                    <section className="mb-8">
                        <div className="mt-6">
                            <p className="text-lg font-semibold">Contact us:</p>
                            <p className="mt-2 font-semibold text-gray-900 text-blue-500 hover:underline">
                                <a href="tel:+94710838673">(+94) 710 838 673</a>
                            </p>
                        </div>
                    </section>

                    <section className="mb-8">
                            <p className="text-lg font-semibold">Follow us on:</p>

                            <ul className="mt-2 flex flex-wrap space-x-8">
                                <li>
                                    <a href="https://www.tiktok.com/@ciyols" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
                                        <TikTok size={24} /> TikTok
                                    </a>
                                </li>

                                <li>
                                    <a href="https://www.instagram.com/ciyolsc/" target="_blank" rel="noopener noreferrer" className="text-purple-500 hover:underline">
                                        <Instagram size={24} /> Instagram
                                    </a>
                                </li>

                                <li>
                                    <a href="https://www.linkedin.com/company/ciyols" target="_blank" rel="noopener noreferrer" className="text-blue-800 hover:underline">
                                        <Linkedin size={24} /> LinkedIn
                                    </a>
                                </li>

                                <li>
                                    <a href="https://www.youtube.com/@Ciyols" target="_blank" rel="noopener noreferrer" className="text-red-500 hover:underline">
                                        <Youtube size={24} /> YouTube
                                    </a>
                                </li>
                            </ul>
                    </section>

                </div>

            </div>
        </Container>
    )
};

export default AboutPage;