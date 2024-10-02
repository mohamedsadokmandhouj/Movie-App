import React from "react";

const AboutUsPage = () => {
  return (
    <div
      className="container-fluid py-5"
      style={{
        backgroundImage: "url('/images/aboutUsMovie.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "100vh",
      }}
    >
      <div className="container py-5 text-center">
        <h1 className="text-light fw-bold mb-4">About MovieMania</h1>
        <p className="text-light fw-bold mb-4">
          MovieMania is your go-to platform for all things movies. From the
          latest blockbusters to indie films and timeless classics, we offer a
          wide selection to cater to every movie enthusiast. Whether you're
          looking for action, drama, or comedy, we’ve got something for
          everyone.
        </p>
        <h2 className="text-light fw-bold mb-3">Our Story</h2>
        <p className="text-light fw-bold mb-4">
          Founded in 2024, MovieMania was created by movie lovers for movie
          lovers. Our mission is to make discovering and watching films easier
          and more enjoyable than ever. We have built partnerships with major
          studios and indie filmmakers alike, offering you a vast and diverse
          library of content to explore.
        </p>
        <h2 className="text-light fw-bold mb-3">Our Values</h2>
        <ul className="text-light fw-bold list-unstyled">
          <li>
            <strong>Passion for Movies:</strong> We live and breathe films, and
            we want to share that passion with our users.
          </li>
          <li>
            <strong>Accessibility:</strong> We believe that great movies should
            be available to everyone, anytime, anywhere.
          </li>
          <li>
            <strong>Innovation:</strong> We're always pushing the boundaries to
            deliver a seamless and personalized viewing experience.
          </li>
        </ul>
        <h2 className="text-light fw-bold mb-3">Why Choose Us</h2>
        <p className="text-light fw-bold">
          At MovieMania, we prioritize quality, variety, and user experience.
          Our platform is easy to use, packed with features, and offers a
          constantly updated selection of movies. Whether you want to binge the
          latest series or enjoy a classic film night, MovieMania is here to
          make your viewing experience exceptional.
        </p>
      </div>
    </div>
  );
};

export default AboutUsPage;
