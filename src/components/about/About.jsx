import Header from "../generic/Header";

export default function About() {
  return (
    <>
      <Header />
      <div className="container mx-auto mt-8">
        <h1 className="text-3xl font-semibold mb-4">About Us</h1>
        <p className="text-gray-700 mb-6">
          Welcome to our app! This is the About Page where you can learn more
          about our mission, goals, and the team behind the scenes.
        </p>
        <h2 className="text-xl font-semibold mb-2">Our Mission</h2>
        <p className="text-gray-700 mb-6">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec
          odio. Praesent libero.
        </p>
        <h2 className="text-xl font-semibold mb-2">Our Team</h2>
        <p className="text-gray-700 mb-6">
          Meet the talented individuals who work hard to make this app a
          reality.
        </p>
        <ul className="list-disc pl-6 mb-6">
          <li>John Doe - CEO</li>
          <li>Jane Smith - Lead Developer</li>
          <li>Alice Johnson - UI/UX Designer</li>
        </ul>
        <h2 className="text-xl font-semibold mb-2">Contact Us</h2>
        <p className="text-gray-700">
          If you have any questions or feedback, feel free to reach out to us at{" "}
          <a href="mailto:kadir@bozkurt.com">info@example.com</a>.
        </p>
      </div>
    </>
  );
}
