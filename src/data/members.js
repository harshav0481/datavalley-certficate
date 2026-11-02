// Fictional placeholder records for the look-alike design.
export const commonDetails = {
  course: 'Embedded Systems',
  branch: 'Electronics and Communication Engineering',
  college: 'Godavari Institute of Engineering and Technology Rajahmundry',
  university: 'JNTU Kakinada',
  duration: '360 Hours',
  issuedDate: '7/15/2026',
}

export const members = [
  {
    slug: 'DV-a84f29c1',
    name: 'Marrapu Lokesh',
    certificateId: 'DV-a84f29c1'
  },
  {
    slug: 'DV-7c31e9b5',
    name: 'Mamidi Harsha Vardhan',
    certificateId: 'DV-7c31e9b5'
  },
  {
    slug: 'DV-f62a83d4',
    name: 'Boddepalli Manoj',
    certificateId: 'DV-f62a83d4'
  },
  {
    slug: 'DV-19b7c5e2',
    name: 'Nalli Srikanth',
    certificateId: 'DV-19b7c5e2'
  },
  {
    slug: 'DV-d48e21a9',
    name: 'Madila Pravallika',
    certificateId: 'DV-d48e21a9'
  },
  {
    slug: 'DV-53c8f716',
    name: 'Karella Bhavani',
    certificateId: 'DV-53c8f716'
  },
  {
    slug: 'DV-b9274e63',
    name: 'Nakka Vamsi Kumar',
    certificateId: 'DV-b9274e63'
  }
];

export const getMember = (slug) =>
  members.find((m) => m.slug === slug);