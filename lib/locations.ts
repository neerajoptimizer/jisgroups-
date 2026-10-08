export type Region = "North India" | "West India" | "South India" | "East India" | "Central India" | "North-East India";

export type City = {
  slug: string;
  name: string;
  state: string;
  region: Region;
  areas: string[];
  economy: string; // what drives demand for facility services in the city
  hq?: boolean;
};

export const cities: City[] = [
  // NCR — head office region
  { slug: "noida", name: "Noida", state: "Uttar Pradesh", region: "North India", hq: true, areas: ["Sector 62", "Sector 63", "Sector 18", "Sector 125", "Sector 135 (Noida Expressway)"], economy: "IT/ITES parks, electronics manufacturing, media houses and fast-growing residential societies" },
  { slug: "greater-noida", name: "Greater Noida", state: "Uttar Pradesh", region: "North India", areas: ["Knowledge Park", "Greater Noida West", "Pari Chowk", "Ecotech Industrial Area", "Surajpur"], economy: "universities, industrial zones, logistics hubs and large residential townships" },
  { slug: "delhi", name: "Delhi", state: "Delhi", region: "North India", areas: ["Connaught Place", "Nehru Place", "Okhla Industrial Area", "Saket", "Dwarka", "Rohini"], economy: "government offices, corporate headquarters, hospitals, institutions and retail" },
  { slug: "gurugram", name: "Gurugram", state: "Haryana", region: "North India", areas: ["Cyber City", "Golf Course Road", "Sohna Road", "Udyog Vihar", "Manesar"], economy: "Fortune 500 offices, IT parks, malls, hotels and premium residences" },
  { slug: "ghaziabad", name: "Ghaziabad", state: "Uttar Pradesh", region: "North India", areas: ["Indirapuram", "Vaishali", "Raj Nagar Extension", "Sahibabad Industrial Area", "Kaushambi"], economy: "industrial units, warehouses, schools and large residential societies" },
  { slug: "faridabad", name: "Faridabad", state: "Haryana", region: "North India", areas: ["NIT Faridabad", "Sector 15", "Ballabhgarh", "Mathura Road", "Neharpar"], economy: "manufacturing plants, auto-component industries and hospitals" },
  // North
  { slug: "chandigarh", name: "Chandigarh", state: "Chandigarh", region: "North India", areas: ["Sector 17", "Industrial Area Phase I & II", "IT Park", "Sector 34", "Zirakpur"], economy: "government departments, IT park, hospitals and educational institutions" },
  { slug: "mohali", name: "Mohali", state: "Punjab", region: "North India", areas: ["Phase 8B Industrial Area", "Sector 82", "Aerocity", "Kharar", "Phase 7"], economy: "IT companies, pharma units, hospitals and new residential projects" },
  { slug: "ludhiana", name: "Ludhiana", state: "Punjab", region: "North India", areas: ["Focal Point", "Ferozepur Road", "Model Town", "Dugri", "Gill Road"], economy: "textile, hosiery, bicycle and engineering industries" },
  { slug: "jaipur", name: "Jaipur", state: "Rajasthan", region: "North India", areas: ["Malviya Nagar", "Sitapura Industrial Area", "Mahindra World City", "C-Scheme", "Vaishali Nagar"], economy: "hotels and heritage tourism, IT SEZs, gems & jewellery and education" },
  { slug: "lucknow", name: "Lucknow", state: "Uttar Pradesh", region: "North India", areas: ["Gomti Nagar", "Hazratganj", "Aliganj", "Amausi Industrial Area", "Sushant Golf City"], economy: "state government offices, hospitals, universities and retail" },
  { slug: "kanpur", name: "Kanpur", state: "Uttar Pradesh", region: "North India", areas: ["Panki Industrial Area", "Dada Nagar", "Swaroop Nagar", "Kidwai Nagar", "Civil Lines"], economy: "leather, textile and defence manufacturing" },
  { slug: "meerut", name: "Meerut", state: "Uttar Pradesh", region: "North India", areas: ["Partapur Industrial Area", "Shastri Nagar", "Delhi Road", "Begum Bridge", "Modipuram"], economy: "sports goods manufacturing, education and retail" },
  { slug: "agra", name: "Agra", state: "Uttar Pradesh", region: "North India", areas: ["Fatehabad Road", "Sikandra", "Sanjay Place", "Kamla Nagar", "Foundry Nagar"], economy: "hotels and tourism, footwear industry and handicrafts" },
  { slug: "varanasi", name: "Varanasi", state: "Uttar Pradesh", region: "North India", areas: ["Sigra", "Lanka", "Cantonment", "Mahmoorganj", "Ramnagar Industrial Area"], economy: "tourism and hospitality, education, hospitals and textiles" },
  { slug: "dehradun", name: "Dehradun", state: "Uttarakhand", region: "North India", areas: ["Rajpur Road", "Selaqui Industrial Area", "Clement Town", "Sahastradhara Road", "Prem Nagar"], economy: "schools and universities, pharma units, hotels and government offices" },
  // West
  { slug: "mumbai", name: "Mumbai", state: "Maharashtra", region: "West India", areas: ["Andheri", "Bandra Kurla Complex", "Lower Parel", "Powai", "Goregaon", "Nariman Point"], economy: "financial institutions, corporate headquarters, malls, hotels and hospitals" },
  { slug: "navi-mumbai", name: "Navi Mumbai", state: "Maharashtra", region: "West India", areas: ["Vashi", "Airoli", "Belapur", "TTC Industrial Area", "Kharghar"], economy: "IT parks, data centres, chemical industries and warehousing" },
  { slug: "thane", name: "Thane", state: "Maharashtra", region: "West India", areas: ["Wagle Estate", "Ghodbunder Road", "Majiwada", "Kolshet", "Bhiwandi"], economy: "IT offices, warehousing at Bhiwandi and residential townships" },
  { slug: "pune", name: "Pune", state: "Maharashtra", region: "West India", areas: ["Hinjewadi", "Kharadi", "Magarpatta", "Chakan MIDC", "Viman Nagar"], economy: "IT parks, automobile manufacturing, educational institutions and hospitals" },
  { slug: "nagpur", name: "Nagpur", state: "Maharashtra", region: "Central India", areas: ["MIHAN", "Butibori MIDC", "Sitabuldi", "Dharampeth", "Hingna MIDC"], economy: "logistics, MIHAN SEZ, government offices and hospitals" },
  { slug: "ahmedabad", name: "Ahmedabad", state: "Gujarat", region: "West India", areas: ["SG Highway", "Prahlad Nagar", "GIFT City", "Sanand", "Naroda GIDC"], economy: "textiles, pharma, automobile plants, GIFT City financial offices" },
  { slug: "surat", name: "Surat", state: "Gujarat", region: "West India", areas: ["Hazira", "Sachin GIDC", "Adajan", "Vesu", "Ring Road"], economy: "diamond and textile industries, port and heavy industry at Hazira" },
  { slug: "vadodara", name: "Vadodara", state: "Gujarat", region: "West India", areas: ["Alkapuri", "Makarpura GIDC", "Savli", "Gotri", "Manjalpur"], economy: "petrochemicals, engineering plants and educational institutions" },
  { slug: "goa", name: "Goa", state: "Goa", region: "West India", areas: ["Panaji", "Margao", "Vasco da Gama", "Verna Industrial Estate", "Calangute"], economy: "hotels, resorts and tourism, pharma units at Verna" },
  // South
  { slug: "bengaluru", name: "Bengaluru", state: "Karnataka", region: "South India", areas: ["Whitefield", "Electronic City", "Outer Ring Road", "Koramangala", "Manyata Tech Park"], economy: "IT/ITES and tech parks, start-ups, malls, hospitals and premium residences" },
  { slug: "hyderabad", name: "Hyderabad", state: "Telangana", region: "South India", areas: ["HITEC City", "Gachibowli", "Madhapur", "Financial District", "Uppal"], economy: "IT campuses, pharma and life sciences, hospitals and hotels" },
  { slug: "chennai", name: "Chennai", state: "Tamil Nadu", region: "South India", areas: ["OMR (IT Corridor)", "Guindy", "Ambattur", "Sriperumbudur", "T. Nagar"], economy: "automobile manufacturing, IT corridor, hospitals and ports" },
  { slug: "coimbatore", name: "Coimbatore", state: "Tamil Nadu", region: "South India", areas: ["Peelamedu", "Saravanampatti", "Race Course", "SIDCO Kurichi", "Avinashi Road"], economy: "textile mills, engineering and pump industries, IT parks and colleges" },
  { slug: "kochi", name: "Kochi", state: "Kerala", region: "South India", areas: ["Infopark Kakkanad", "Edappally", "Marine Drive", "Vyttila", "Kalamassery"], economy: "port and shipping, IT parks, hospitals and tourism" },
  { slug: "visakhapatnam", name: "Visakhapatnam", state: "Andhra Pradesh", region: "South India", areas: ["Rushikonda IT Park", "Gajuwaka", "Dwaraka Nagar", "Autonagar", "MVP Colony"], economy: "port, steel plant, pharma and IT" },
  { slug: "vijayawada", name: "Vijayawada", state: "Andhra Pradesh", region: "South India", areas: ["Benz Circle", "Auto Nagar", "Governorpet", "Gannavaram", "Patamata"], economy: "trade, auto ancillary units, education and government offices" },
  // East & North-East
  { slug: "kolkata", name: "Kolkata", state: "West Bengal", region: "East India", areas: ["Salt Lake Sector V", "New Town Rajarhat", "Park Street", "Howrah", "Esplanade"], economy: "IT hubs, corporate offices, hospitals, ports and retail" },
  { slug: "bhubaneswar", name: "Bhubaneswar", state: "Odisha", region: "East India", areas: ["Infocity Patia", "Chandrasekharpur", "Mancheswar Industrial Estate", "Saheed Nagar", "Khandagiri"], economy: "IT parks, government offices, educational institutions and hospitals" },
  { slug: "patna", name: "Patna", state: "Bihar", region: "East India", areas: ["Fraser Road", "Boring Road", "Bailey Road", "Patliputra Industrial Area", "Kankarbagh"], economy: "government offices, hospitals, schools and retail" },
  { slug: "ranchi", name: "Ranchi", state: "Jharkhand", region: "East India", areas: ["Main Road", "Doranda", "Hatia", "Kanke Road", "Namkum"], economy: "PSUs, heavy engineering, mining offices and education" },
  { slug: "guwahati", name: "Guwahati", state: "Assam", region: "North-East India", areas: ["GS Road", "Dispur", "Paltan Bazaar", "Beltola", "Amingaon"], economy: "the gateway to the North-East — government offices, hospitals, oil & gas and trade" },
  // Central
  { slug: "indore", name: "Indore", state: "Madhya Pradesh", region: "Central India", areas: ["Vijay Nagar", "Pithampur", "AB Road", "Super Corridor", "Sanwer Road Industrial Area"], economy: "pharma and automobile industries at Pithampur, IT parks and education" },
  { slug: "bhopal", name: "Bhopal", state: "Madhya Pradesh", region: "Central India", areas: ["MP Nagar", "Govindpura Industrial Area", "Arera Colony", "Mandideep", "Hoshangabad Road"], economy: "state government offices, PSUs, Mandideep industries and hospitals" },
  { slug: "raipur", name: "Raipur", state: "Chhattisgarh", region: "Central India", areas: ["Naya Raipur", "Urla Industrial Area", "Siltara", "Shankar Nagar", "Telibandha"], economy: "steel and power plants, government offices and hospitals" },
];

export const regions: Region[] = ["North India", "West India", "South India", "East India", "Central India", "North-East India"];

export const getCity = (slug: string) => cities.find((c) => c.slug === slug);

export const nearbyCities = (city: City, n = 6) =>
  cities.filter((c) => c.region === city.region && c.slug !== city.slug).slice(0, n);

export const featuredCities = ["delhi", "noida", "gurugram", "mumbai", "bengaluru", "hyderabad", "pune", "chennai", "kolkata", "ahmedabad", "lucknow", "jaipur"]
  .map((s) => getCity(s)!)
  .filter(Boolean);
