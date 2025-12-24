'use client';

const teamMembers = [
  {
    name: 'Manish Kumar',
    role: 'Founder & Full Stack Developer',
    image: 'https://images.unsplash.com/photo-1527980965255-d3b416303d12',
    description:
      'Leads the TechHelp4U community and builds scalable web solutions using modern technologies.',
  },
  {
    name: 'Amit Sharma',
    role: 'UI/UX Designer',
    image: 'https://images.unsplash.com/photo-1502685104226-ee32379fefbe',
    description:
      'Designs modern, clean, and user-friendly interfaces with a strong focus on user experience.',
  },
  {
    name: 'Neha Verma',
    role: 'Frontend Developer',
    image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2',
    description:
      'Specializes in React, Next.js, and animations to create smooth, interactive websites.',
  },
  {
    name: 'Rahul Singh',
    role: 'Backend Engineer',
    image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d',
    description:
      'Handles backend systems, APIs, databases, and ensures application performance and security.',
  },
  {
    name: 'Priya Gupta',
    role: 'Community Manager',
    image: 'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e',
    description:
      'Manages the TechHelp4U community, organizes events, and helps members grow together.',
  },
];

export default function OurTeam() {
  return (
    <div className="min-h-screen bg-background px-6 py-24">
      {/* Heading */}
      <h1 className="text-4xl font-bold text-purple-400 mb-4">
        Our Team
      </h1>

      <p className="text-gray-400 max-w-2xl mb-12">
        Meet the passionate people behind TechHelp4U who work together to build,
        support, and grow the community.
      </p>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {teamMembers.map((member, index) => (
          <div
            key={index}
            className="flex flex-col sm:flex-row bg-white/5 backdrop-blur border border-white/10 rounded-2xl overflow-hidden hover:border-purple-500/40 transition-all"
          >
            {/* Left Image */}
            <div className="sm:w-1/3 w-full h-56 sm:h-auto">
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Right Content */}
            <div className="p-6 flex flex-col justify-center">
              <h3 className="text-xl font-semibold text-white mb-1">
                {member.name}
              </h3>
              <span className="text-sm text-purple-400 mb-3">
                {member.role}
              </span>
              <p className="text-gray-400 text-sm">
                {member.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
