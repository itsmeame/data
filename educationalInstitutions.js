export const institutionsUtils = {
  albums: [
    {
      thumbnail:
        "https://res.cloudinary.com/dcgrv6shk/image/upload/v1705222929/Eduroclass/Uploads/EducationInstitutions/kcjt7pxrmuecb70byky0.jpg",
    },
    {
      thumbnail:
        "https://res.cloudinary.com/dvj4qsyeu/image/upload/v1709710045/natur_uxmadf.png",
    },
  ],

  programs: [
    {
      name: "Computer Science",
    },
    { name: "Electrical Engineering" },
    { name: "Business Administration" },
    { name: "Environmental Science" },
    { name: "Software Engineering" },
    { name: "Network Science" },
    { name: "Computer Applications" },
    { name: "Game Science" },



    // Add more programs...
  ],
  faculty: [
    {
      name: "Prof.Arjun Bhandari",
      qualification: "Ph.D. in Physics",
      experience: 10,
    },
    // Add more faculty members...
    {
      name: "Dr. Shree Ram Baidya",
      qualification: "Ph.D. in Computer Science",
      experience: 15,
    },
    {
      name: "Prof. Almala Gurung",
      qualification: "Ph.D. in Chemistry",
      experience: 8,
    },
    {
      name: "Dr. Shruti shrestha",
      qualification: "Ph.D. in Mathematics",
      experience: 12,
    },
    {
      name: "Dr. ",
      qualification: "Ph.D. in Neurology",
      experience: 8,
    },
    {
      name: "Dr. Krishna Maharjan",
      qualification: "Ph.D. in History",
      experience: 9,
    },

  ],
  extraActivities: [
    {
      name: "Robotics Club",
    },
    // Add more extracurricular activities...
    { name: "Debating Society" },
    { name: "Art and Music Club" },
    { name: "Environmental Awareness Group" },
    // Add more extracurricular activities...
    { name: "Community Service Club" },
    { name: "Entrepreneurship and Innovation Hub" },
    { name: "Literary Magazine Editorial Team" },
    { name: "Photography and Film Club" },
    { name: "Chess Club" },
    { name: "Health and Wellness Committee" },
  ],
  cost: [
    {
      tuition: 15000,
      fees: 2000,
      livingExpenses: 10000,
    },
    // Add more cost details...
    {
      tuition: 12000,
      fees: 1800,
      livingExpenses: 9000,
    },
    {
      tuition: 17000,
      fees: 2500,
      livingExpenses: 12000,
    },
    {
      tuition: 14000,
      fees: 2200,
      livingExpenses: 9500,
    },
  ],
  alumniSuccess: [
    {
      description: "Successful entrepreneur in the tech industry.",
    },
    {
      description: "Influential political leader and advocate for social justice.",
    },
    {
      description: "Award-winning author and literary critic.",
    },
    {
      description: "Leading expert in artificial intelligence and machine learning.",
    },
    {
      description: "Renowned medical researcher and healthcare innovator.",
    },
    {
      description: "Successful finance and investment strategist.",
    },
    
    // Add more alumni success stories...
    {
      description: "Renowned scientist in the field of biology.",
    },
    {
      description: "Accomplished artist and designer.",
    },
    {
      description: "Pioneer in sustainable energy solutions.",
    },
  ],
  infrastructure: [
    {
      name: "Main Building",
      classrooms: 20,
      library: 1,
      laboratories: 23,
      sportsFacilities: 34,
    },
    {
      name: "DDBuilding",
      classrooms: 50,
      library: 1,
      laboratories: 23,
      sportsFacilities: 34,
    },
    // Add 3 more infrastructure details...
    {
      name: "Science Block",
      classrooms: 30,
      library: 1,
      laboratories: 23,
      sportsFacilities: 43,
    },
    {
      name: "Arts Building",
      classrooms: 40,
      library: 1,
      laboratories: 12,
      sportsFacilities: 4,
    },
    {
      name: "Engineering Wing",
      classrooms: 25,
      library: 1,
      laboratories: 6,
      sportsFacilities: 5,
    },
    {
      name: "Digital Media Studio",
      classrooms: 12,
      library: 1,
      laboratories: 10,
      sportsFacilities: 3,
    },
    {
      name: "Language Learning Center",
      classrooms: 15,
      library: 1,
      laboratories: 5,
      sportsFacilities: 2,
    },
  ],
};
export const institutionsData = [
  {
    name: "Elite College of Engineering",
    albumIds: [1, 2],
    programsIds: [1, 2],
    facultyIds: [1, 2],
    extraActivitiesIds: [1, 2],
    costIds: [1, 2],
    alumniSuccessIds: [1, 2],
    insfrastructureIds: [1, 2],
    thumbnail:
      "https://res.cloudinary.com/dvj4qsyeu/image/upload/v1709710062/first_xlvniz.jpg",
    description: "Leading institution for engineering studies",
    address: "Chabahil,Kathmandu",
    type: "College",
    category: "Public",
    accreditation_status: "Accredited",
    principal_name: "Dr. Shijan Shah",
    principal_email: "elitecollege@45.edu",
    principal_phone_number: "+977 98125252522",
    files: "https://elitecollege.edu/files/brochure.pdf",
    ownerId: 1,
  },
  {
    name: "Bloomfield High School",
    albumIds: [1, 2],
    programsIds: [1, 2],
    facultyIds: [1, 2],
    extraActivitiesIds: [1, 2],
    costIds: [1, 2],
    alumniSuccessIds: [1, 2],
    insfrastructureIds: [1, 2],
    thumbnail:
      "https://res.cloudinary.com/dvj4qsyeu/image/upload/v1709710043/bloom_zhfbyk.png",
    description: "Excellence in secondary education",
    address: "Birauta-17,Pokhara",
    type: "School",
    category: "Private",
    accreditation_status: "Accredited",
    principal_name: "Mrs. Shruti jha",
    principal_email: "ly@bloomfieldhigh.edu",
    principal_phone_number: "+98765432100",
    files: "https://bloomfieldhigh.edu/documents/admission_form.pdf",
    ownerId: 2,
  },
  {
    name: "Global Arts School",
    albumIds: [1, 2],
    programsIds: [1, 2],
    facultyIds: [1, 2],
    extraActivitiesIds: [1, 2],
    costIds: [1, 2],
    alumniSuccessIds: [1, 2],
    insfrastructureIds: [1, 2],

   thumbnail:"https://res.cloudinary.com/dvj4qsyeu/image/upload/v1709710061/global_ymad1h.jpg",
    description: "Nurturing creativity and artistic talent",
    address: "Kalanki,Kathmandu",
    type: "School",
    category: "Private",
    accreditation_status: "Accredited",
    principal_name: "Prof.Krishna Prasad Oli",
    principal_email: "ol@globalarts.edu",
    principal_phone_number: "+9822334455",
    files: "https://globalarts.edu/files/prospectus.pdf",
    ownerId: 3,
  },
  {
    name: "Innovative HighSchool",
    albumIds: [1, 2],
    programsIds: [1, 2],
    facultyIds: [1, 2],
    extraActivitiesIds: [1, 2],
    costIds: [1, 2],
    alumniSuccessIds: [1, 2],
    insfrastructureIds: [1, 2],

    thumbnail:
      "https://res.cloudinary.com/dvj4qsyeu/image/upload/v1709710027/innovativer_dyiiwp.jpg",
    type: "High School",
    category: "Private",
    accreditation_status: "Accredited",
    principal_name: "Shreeram kumar",
    principal_email: "sophia@innovatorsacademy.edu",
    principal_phone_number: "+9988776655",
    files: "https://innovatorsacademy.edu/files/innovation_guide.pdf",
    ownerId: 2,
  },
  {
    name: "Nature's Conservatory College",
    albumIds: [1, 2],
    programsIds: [1, 2],
    facultyIds: [1, 2],
    extraActivitiesIds: [1, 2],
    costIds: [1, 2],
    alumniSuccessIds: [1, 2],
    insfrastructureIds: [1, 2],
    thumbnail:
      "https://res.cloudinary.com/dvj4qsyeu/image/upload/v1709710045/natur_uxmadf.png",
    description: "Preserving and studying natural sciences",
    address: "Dharan,Nepal",
    type: "College",
    category: "Public",
    accreditation_status: "Accredited",
    principal_name: "Dr. Radha krishna koirala",
    principal_email: "radha@naturesconservatory.edu",
    principal_phone_number: "+9823334455",
    files: "https://naturesconservatory.edu/files/research_papers.pdf",
    ownerId: 2,
  },
  {
    name: "Experts Consultancy",
    albumIds: [1, 2],
    programsIds: [1, 2],
    facultyIds: [1, 2],
    extraActivitiesIds: [1, 2],
    costIds: [1, 2],
    alumniSuccessIds: [1, 2],
    insfrastructureIds: [1, 2],
    thumbnail:
      "https://res.cloudinary.com/dvj4qsyeu/image/upload/v1709712325/expert_kddrad.jpg",
    description: "Preserving and studying natural sciences",
    address: "Dharan,Nepal",
    type: "Consultancy",
    category: "Public",
    accreditation_status: "Accredited",
    principal_name: "Guru raj hamal",
    principal_email: "experts@23.edu",
    principal_phone_number: "+9823334455",
    files: "https://naturesconservatory.edu/files/research_papers.pdf",
    ownerId: 2,
  },
  {
    name: "Bindeswarri School ",
    albumIds: [1, 2],
    programsIds: [1, 2],
    facultyIds: [1, 2],
    extraActivitiesIds: [1, 2],
    costIds: [1, 2],
    alumniSuccessIds: [1, 2],
    insfrastructureIds: [1, 2],
    thumbnail:
      "https://res.cloudinary.com/dvj4qsyeu/image/upload/v1709710043/bindes_wshz7x.png",
    description: "Early education through Montessori method",
    address: "Narayngarh,Chitwan",
    type: "school",
    category: "public",
    accreditation_status: "Accredited",
    principal_name: "Ms. Bindeswari Khadka",
    principal_email: "bindeswari@montessori.edu",
    principal_phone_number: "+95988776655",
    files: "https://brightmindsmontessori.edu/files/parent_handbook.pdf",
    ownerId: 1,
  },
  // Add more educational institution data as needed
];
