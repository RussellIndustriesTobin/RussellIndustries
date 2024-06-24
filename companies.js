const companies = [
    {
        id: 'cbb2',
        name: 'Canadian Babbit Bearings',
        imgSrc: 'images/canadian_babbitt_bearings_ltd_logo.jfif',
        address: 'Dalkeith Drive, Brantford, Ontario, N3P 1N6',
        phone: '(519) 752-5471',
        fax: '(226) 799-0143',
        tollFree: '(800) 963-9863',
        website: 'www.cbb.ca',
        description: ' CBB is committed to the integrity of manufacture and repair of babbitt bearings. CBB was founded on the premise that there was a need for a specialized babbitt bearing manufacturer in North America. In 1981, CBB made a bold and brave business decision to focus solely on bearing  production. This commitment  and specialization made CBB one of the world’s most prominent babbitt bearing facilities. CBB produce superior, specialized babbitt bearings to OEM specifications for equipment.'
    },
     {
        id: 'zincaloy',
        name: 'Zincaloy',
        imgSrc: 'images/zincaloy_ltd_logo.jpg',
        address: 'Dalkeith Drive, Brantford, Ontario, N3P 1N6',
        phone: '226-493-0314',
        fax: '(226) 799-0143',
        tollFree: '(800) 963-9863',
        website: 'www.zincaloy.com',
        description: 'Zincaloy, a Canadian company with over 40 years of experience in continuous casting zinc alloys, boasts well-established resources and suppliers in the design and manufacturing industries. Zincaloy specializes in providing economical prototype or finished parts, including our high-performance bearings and bushings.'
    },
    {
        id: 'csm',
        name: 'Canadian Structural & Mechanical Ltd.',
        imgSrc: 'images/csm_ltd.jfif',
        address: '1399 Lougar Avenue, Sarnia, Ontario, N7S 5N5',
        phone: '519-383-6525',
        fax: '519-383-6789',
        website: 'www.cansam.com',
        description: 'Canadian Structural & Mechanical Ltd. (CSM) is a full service Industrial Contractor based in Sarnia, Ontario. Our core workforce is made up of approximately 200 dedicated men and women. We have the infrastructure to exceed 700 employees when needed during shutdowns.'
    },
    {
        id: 'csm',
        name: 'CSM Electrical & Instrumentation Ltd.',
        imgSrc: 'images/csm_ei_ltd.jfif',
        address: '1399 Lougar Avenue, Sarnia, Ontario, N7S 5N5',
        phone: '519-383-6525',
        fax: '519-383-6789',
        website: 'www.cansamei.com',
        description: 'CSM Electrical is a full service electrical contractor, based In Sarnia Ontario. CSM Electrical is a sister company of Canadian Structural & Mechanical Ltd, originally incorporated in 1990 and is one of the largest local maintenance and project management companies in Sarnia & Lambton County.'
    },
    {
        id: 'csm',
        name: 'Gudgeon Thermfire International',
        imgSrc: 'images/gudgeon_thermfire_international_inc__logo.jfif',
        address: '420 Neptune Crescent, London, Ontario, N6M 1A1',
        phone: '519-451-5320',
        fax: '519-453-8753',
        website: 'www.gudgeonthermfire.ca',
        description: 'G.T.I. specializes in thermal sand reclamation, this is why G.T.I. has dominated the North American Market with over 100 installations.'
    },
    {
        id: 'csm',
        name: 'Canadian Specialty Castings',
        imgSrc: 'images/csc_ltd.jfif',
        address: '4248 Broughton Avenue, Niagara Falls, Ontario, L2E 3K6',
        phone: '905-356-2655',
        fax: '905-356-6760',
        website: 'www.cscastings.com',
        description: 'Based in Niagara Falls, through a combination of performance, skill, and dedication to quality we have become the fastest growing sandcasting foundry in Canada. We provide a wide range of services and products to our customers. Organizations all over North America choose CSC for their ability to pour more than 400 Alloys under one roof and counting with the most common of them being, Carbon and Low Alloy Steel, Stainless Steel.'
    },
    {
        id: 'csm',
        name: 'Bearing Bronze Limited',
        imgSrc: 'images/bbl_logo.jfif',
        address: '360 Sheldon Drive Cambridge, Ontario, N1T 1A9',
        phone: '(519) 622-7900',
        website: 'www.bearingbronze.com',
        description: 'At Bearing Bronze, we specialize in the manufacturing of custom engineered bushings and bearings. Our expertise comes from 50 years of experience in manufacturing.'
    },
    {
        id: 'csm',
        name: 'Pacific West Refrigeration',
        imgSrc: 'images/pwr.jfif',
        address: '420 Neptune Crescent, London, Ontario, N6M 1A1',
        phone: '604-885-3499',
        website: 'www.pacificwestrefrigeration.com',
        description: 'A leading expert in Marine Refrigeration for more than 25 years, choosing Pacific West Refrigeration to build your next Marine Refrigeration System is the right choice.'
    }
]

function createCompanySection(company) {
    return `
        <div id="${company.id}">
            <h1 id="sub-title">${company.name}</h1>
            <img class="companies-img" src="${company.imgSrc}" class = "images-companies">
             <div id="text-container">
                <h1 class="content-name" id="decription-lbl">Description</h1>
                <h1 class="content-name" id="contact-lbl">Contact Information</h1>
             </div>
            <div class="container">
                 <p style="text-indent: 20px;" class="description">${company.description}</p>
                <div id="${company.id}-info">
                    <h3 class="text-section">
                        <img src="./images/location-icon.png" alt="Location Icon" class = "icons" style="vertical-align: middle;">
                        ${company.address}
                    </h3>
                    <h3 class="text-section">
                        <img src="./images/phone-icon.png" alt="Phone Icon" class = "icons" style="vertical-align: middle;">
                        ${company.phone}
                    </h3>
                    ${company.fax ? `<h3 class="text-section">
                        <img src="./images/fax-icon.png" alt="Fax Icon" class = "icons"  style="vertical-align: middle;">
                        ${company.fax}
                    </h3>` : ''}
                    ${company.tollFree ? `<h3 class="text-section">
                        <img src="./images/toll-free-icon.png" alt="Toll-Free Icon" class = "icons"  style="vertical-align: middle;">
                        ${company.tollFree}
                    </h3>` : ''}
                    ${company.website ? `<h3 class="text-section">
                        <img src="./images/website-icon.png" alt="Website Icon" class = "icons" style="vertical-align: middle;">
                        <a href="https://${company.website}" target="_blank" style="font-weight: bold; color: white;">${company.website}</a>
                    </h3>` : ''}
                </div>
            </div>
        </div>
    `;
}


document.addEventListener('DOMContentLoaded', () => {
    const companiesContainer = document.getElementById('companies-container')
    companies.forEach(company => {
        companiesContainer.innerHTML += createCompanySection(company)
    })
})
