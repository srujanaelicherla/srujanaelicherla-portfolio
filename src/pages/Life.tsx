export default function Life() {
  const content = [
    {
      image: "/life1.jpg",
      text: "I love café hopping — trying out new food, soaking in the different vibes each café in Bangalore gives, and spending quality time with people who matter most to me. Each café feels like a small adventure, whether it’s tasting a new pastry, discovering a cozy picture-worthy corner to sit in, or sharing laughter and stories with friends. These moments are simple but meaningful, and they remind me to slow down and enjoy life outside academics.",
      reverse: false,
    },
    {
      image: "/life2.jpg",
      text: "Traveling gives me the chance to explore new places and experience different cultures. I enjoy seeing more of the world, trying local food, walking through streets I’ve never been in, and observing how people live in different parts of the world. Every journey teaches me something new — about life, perspectives, and myself — and it always fills me with inspiration and curiosity.",
      reverse: true,
    },
    {
      image: "/life3.jpg",
      text: "Reading books allows me to expand my knowledge and see the world from different perspectives. I enjoy diving into stories, learning new ideas, and reflecting on experiences beyond my own. Books give me a quiet space to think, imagine, and grow, helping me approach both life and work with a broader mindset.",
      reverse: false,
    },
    {
      image: "/life4.jpg",
      text: "Writing and journaling are my ways of expressing thoughts and creativity. Whether it’s jotting down reflections, stories, or ideas, putting words on paper helps me process thoughts and understand myself better. It’s a simple habit that lets me capture moments, emotions, and insights that might otherwise be forgotten, and it inspires me in both personal and professional life.",
      reverse: true,
    },
  ];

  return (
    <div className="min-h-screen px-6 py-24 bg-gradient-to-b from-white/40 to-blue-50">
      <div className="max-w-4xl mx-auto">

        {/* Back Button */}
        <a href="/" className="text-purple-600 hover:underline mb-6 inline-block">
          ← Back to Portfolio
        </a>

        {/* Page Title */}
        <h1 className="text-5xl font-bold text-[#1E293B] mb-16 text-center">
          Life Outside Coding
        </h1>

        {/* Article Sections */}
        {content.map((section, index) => (
          <div
            key={index}
            className={`flex flex-col md:flex-row items-center mb-12 gap-8 ${
              section.reverse ? "md:flex-row-reverse" : ""
            }`}
          >
            {/* Image */}
            <div className="md:w-1/2 rounded-xl overflow-hidden shadow-lg flex-shrink-0">
            <img
                src={section.image}
                className="w-full h-64 md:h-80 lg:h-96 object-cover rounded-xl transform hover:scale-105 transition duration-300"
                alt={`Life image ${index + 1}`}
            />
            </div>

            {/* Text */}
            <div className="md:w-1/2 text-gray-800 text-lg leading-relaxed">
              {section.text}
            </div>
          </div>
        ))}

      </div>
    </div>
  );
}