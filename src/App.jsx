import React, { useState } from "react";
import "./App.css";
//import screenshotImg from "./assets/screenshot.png"; // Place your screenshot in src/assets/screenshot.png
import handshakeImg from "./assets/handshake.png";
import postDisbursementImg from "./assets/post_disbursement.png";
import regulationInterestImg from "./assets/regulation_interest.png";
import microfinanceImg1 from "./assets/microfinance1.png";
import microfinanceImg2 from "./assets/microfinance2.png";
import responsibilityBoardImg from "./assets/responsibility_board.png";
import forceMajeureImg from "./assets/force_majeure.png";
import reviewImg from "./assets/review.png";
import attentionPleaseImg from "./assets/attention_please.png";
import agrimLogo from "./assets/agrim_logo.png";

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="container">
      <Sidebar open={sidebarOpen} onClose={() => setSidebarOpen(false)} />
      <div className="main-section">
        <Header onMenuClick={() => setSidebarOpen(true)} />
        <MainContent />
        {sidebarOpen && <div className="sidebar-overlay" onClick={() => setSidebarOpen(false)}></div>}
      </div>
    </div>
  );
}

function Sidebar({ open, onClose }) {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      onClose(); // Close sidebar after clicking on mobile
    }
  };

  return (
    <aside className={`sidebar${open ? " open" : ""}`}>
      <div className="sidebar-title">
        <span>TABLE OF CONTENT</span>
        <span className="menu-icon" onClick={onClose}>&#10005;</span>
      </div>
      <nav>
        <ul>
          <li onClick={() => scrollToSection('introduction')}><i className="icon"></i> Introduction</li>
          <li onClick={() => scrollToSection('purpose')}><i className="icon"></i> Purpose</li>
          <li onClick={() => scrollToSection('definitions')}><i className="icon"></i> Definitions</li>
          <li onClick={() => scrollToSection('key-commitments')}><i className="icon"></i> Key Commitments</li>
          <li onClick={() => scrollToSection('fair-practice')}><i className="icon"></i> Fair Practice Guidelines for NBFCs</li>
          <li className="sub-list" onClick={() => scrollToSection('loan-applications')}>a. Loan Applications and Their Processing</li>
          <li className="sub-list" onClick={() => scrollToSection('loan-appraisal')}>b. Loan Appraisal and Terms/Conditions</li>
          <li className="sub-list" onClick={() => scrollToSection('loan-disbursement')}>c. Loan Disbursement and Changes in Terms</li>
          <li className="sub-list" onClick={() => scrollToSection('post-disbursement')}>d. Post-disbursement Monitoring</li>
          <li className="sub-list" onClick={() => scrollToSection('general-provisions')}>e. General Provisions</li>
          <li className="sub-list" onClick={() => scrollToSection('confidentiality')}>f. Confidentiality of Information</li>
          <li className="sub-list" onClick={() => scrollToSection('language-communication')}>g. Language and Communication</li>
          <li className="sub-list" onClick={() => scrollToSection('regulation-interest')}>h. Regulation of Interest Rate</li>
          <li onClick={() => scrollToSection('penal-charges')}><i className="icon"></i> Penal Charges</li>
          <li onClick={() => scrollToSection('microfinance')}><i className="icon"></i> Fair Practice Code for Microfinance Loan</li>
          <li className="sub-list" onClick={() => scrollToSection('microfinance-general')}>a. General</li>
          <li className="sub-list" onClick={() => scrollToSection('non-coercive')}>b. Non-coercive methods of recovery</li>
          <li onClick={() => scrollToSection('responsibility')}><i className="icon"></i> Responsibility of The Board</li>
          <li onClick={() => scrollToSection('grievance')}><i className="icon"></i> Grievance Redressal Mechanism</li>
          <li onClick={() => scrollToSection('review')}><i className="icon"></i> Review of the Policy</li>
          <li onClick={() => scrollToSection('force-majeure')}><i className="icon"></i> Force Majeure</li>
          <li onClick={() => scrollToSection('disclaimer')}><i className="icon"></i> Disclaimer</li>
        </ul>
      </nav>
    </aside>
  );
}

function Header({ onMenuClick }) {
  return (
    <header className="header">
      <button className="hamburger" onClick={onMenuClick}>
        <span></span>
        <span></span>
        <span></span>
      </button>
      <img src={agrimLogo} alt="Logo" className="logo" />
      <div className="header-right">
        <span>care@agrimfincap.com |</span>
        <span> 1800 3092760 </span>
        <span className="social-icons">
          {/* Replace with real icons */}
          <i>W</i> <i>F</i> <i>L</i> <i>I</i>
        </span>
      </div>
    </header>
  );
}

function PurposeSection() {
  return (
    <section className="purpose-section">
      <div className="section-title purpose-title">PURPOSE</div>
      <div className="purpose-desc">
        The purpose of this Fair Practices Code (FPC) is to:
      </div>
      <div className="purpose-grid">
        <div className="purpose-card">
          <div className="purpose-icon icon1"></div>
          <div>
            Ensure transparent, ethical, and customer-oriented lending practices;
          </div>
        </div>
        <div className="purpose-card">
          <div className="purpose-icon icon2"></div>
          <div>
            Comply with all applicable statutory and regulatory requirements;
          </div>
        </div>
        <div className="purpose-card">
          <div className="purpose-icon icon3"></div>
          <div>
            Promote fair treatment and non-discriminatory access to financial services;
          </div>
        </div>
        <div className="purpose-card">
          <div className="purpose-icon icon4"></div>
          <div>
            Establish a framework for marketing, loan origination, servicing, recovery, and grievance redressal.
          </div>
        </div>
      </div>
      <div className="purpose-note">
        <span className="purpose-note-star">**</span>
        The Code applies to all business operations of the Company and ensures equal access to all eligible borrowers without bias based on caste, creed, religion, gender, or any other discriminatory factor.
      </div>
    </section>
  );
}

function DefinitionsSection() {
  return (
    <section className="definitions-section">
      <div className="definitions-title">DEFINITIONS</div>
      <div className="definitions-list">
        <div className="definition-item">
          <span className="definition-num num1">01</span>
          <span className="definition-text"><b>"Board"</b> refers to the Board of Directors of Agrim Fincap Private Limited.</span>
        </div>
        <div className="definition-item">
          <span className="definition-num num2">02</span>
          <span className="definition-text"><b>"Company" or "Agrim"</b> refers to Agrim Fincap Private Limited</span>
        </div>
        <div className="definition-item">
          <span className="definition-num num3">03</span>
          <span className="definition-text"><b>"Directors"</b> means individuals appointed to the Board of the Company.</span>
        </div>
        <div className="definition-item">
          <span className="definition-num num4">04</span>
          <span className="definition-text"><b>"FPC"</b> means this Fair Practices Code.</span>
        </div>
      </div>
    </section>
  );
}

function KeyCommitmentsSection() {
  const commitments = [
    "Delivering efficient, courteous, and professional service to all customers;",
    "Setting internal service standards exceeding industry norms;",
    "Ensuring non-discriminatory practices in customer engagement;",
    "Providing transparent, full disclosures regarding its financial products;",
    "Avoiding misleading advertisements or hidden charges;",
    "Communicating in a language understandable to the customer;",
    "Maintaining safe custody of customer securities;",
    "Acting with fairness, integrity, and transparency in all transactions;",
    "Educating customers about product risks and benefits;",
    "Addressing grievances promptly and effectively."
  ];
  return (
    <section className="key-commitments-section">
      <div className="key-commitments-title">KEY COMMITMENTS</div>
      <div className="key-commitments-desc">
        Agrim is committed to the following principles:
      </div>
      <div className="key-commitments-grid">
        {commitments.map((text, i) => (
          <div className={`commitment-card card${i+1}`} key={i}>
            <span className="commitment-num">{String(i+1).padStart(2, '0')}</span>
            <span className="commitment-text">{text}</span>
          </div>
        ))}
      </div>
    </section>
  );
}



function CommitImage() {
  return (
    <div className="commit-image-container">
      <img src={"key_commitments.png"} alt="Commitment handshake" />
    </div>
  );
}



function FairPracticeGuidelinesSection() {
  return (
    <section className="fpg-section">
      <div className="fpg-title">FAIR PRACTICE GUIDELINES FOR NBFCs</div>
       {/* <div className="fpg-diagram">
        <div className="fpg-bubble fpg-orange">
          Comprehensive application forms with fee details, refundability, pre-payment options, and other relevant borrower information.
        </div>
        <div className="fpg-bubble fpg-blue-left">
          Acknowledgement of all loan applications with indicated disposal timelines (for loans up to ₹2 lakhs).
        </div>
        <div className="fpg-center">
          <div className="fpg-center-title">Loan Applications<br />and Processing</div>
        </div>
        <div className="fpg-bubble fpg-blue-right">
          Timely verification of applications and immediate intimation of required additional details
        </div>
        <div className="fpg-bubble fpg-blue-bottom">
          Written communication of rejection reasons for loan applications up to ₹2 lakhs within the stipulated time.
        </div> 
      </div> */}
       <div className="guidelines-image-container"> {/*"originally eta comit-image-container chilo" */}
      <img src={"guidelines.png"} alt="Commitment handshake" className="guidelines-img" />
      </div>
      

    </section>
  );
}

function LoanAppraisalSection() {
  const items = [
    {
      icon: "https://img.icons8.com/ios-filled/50/ffffff/contract.png",
      text: "Loans will be appraised in accordance with the Company's Credit Policy."
    },
    {
      icon: "https://img.icons8.com/ios-filled/50/ffffff/approval.png",
      text: "Proper credit assessment, not solely reliant on margin and security."
    },
    {
      icon: "https://img.icons8.com/ios-filled/50/ffffff/agreement.png",
      text: "Clear communication of credit limits and terms/conditions with borrower's informed acceptance on record."
    },
    {
      icon: "https://img.icons8.com/ios-filled/50/ffffff/document--v1.png",
      text: "Written and certified loan agreements with copies of all enclosures provided to the borrower."
    },
    {
      icon: "https://img.icons8.com/ios-filled/50/ffffff/ok.png",
      text: "Clear stipulation of lender's discretionary credit facilities and the absence of obligation for future requirements without proper review."
    },
    {
      icon: "https://img.icons8.com/ios-filled/50/ffffff/time.png",
      text: "Time-bound appraisal procedures and communication of decisions in consortium lending."
    }
  ];
  return (
    <section className="loan-appraisal-section">
      <div className="loan-appraisal-title">Loan Appraisal and Terms/Conditions</div>
      <div className="loan-appraisal-grid">
        {items.map((item, i) => (
          <div className="loan-appraisal-card" key={i}>
            <img src={item.icon} alt="icon" className="loan-appraisal-icon" />
            <div className="loan-appraisal-text">{item.text}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

function LoanDisbursementSection() {
  const items = [
    {
      color: "#6fcf97", // green
      icon: "https://img.icons8.com/ios-filled/24/ffffff/notification.png",
      text: "Borrowers shall be notified in advance of any changes to terms, including interest rates or charges."
    },
    {
      color: "#2ec4b6", // teal
      icon: "https://img.icons8.com/ios-filled/24/ffffff/document--v1.png",
      text: "All changes shall apply prospectively only and be incorporated into the loan documentation"
    },
    {
      color: "#2196f3", // blue
      icon: "https://img.icons8.com/ios-filled/24/ffffff/edit-property.png",
      text: "Agreements may be signed digitally (clickwrap, e-sign, etc.) before disbursement."
    },
    {
      color: "#1956a5", // dark blue
      icon: "https://img.icons8.com/ios-filled/24/ffffff/home-page.png",
      text: "Acceleration or recall decisions will follow contractual provisions and due notice."
    }
  ];
  return (
    <section className="loan-disbursement-section">
      <div className="loan-disbursement-title">Loan Disbursement and Changes in Terms</div>
      <div className="loan-disbursement-grid">
        {items.map((item, i) => (
          <div className="loan-disbursement-card" key={i} style={{'--card-color': item.color}}>
            <div className="loan-disbursement-header" style={{background: item.color}}>
              <span className="loan-disbursement-num">{String(i+1).padStart(2, '0')}</span>
            </div>
            <div className="loan-disbursement-body">
              <div className="loan-disbursement-text">{item.text}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function PostDisbursementMonitoringSection() {
  const items = [
    {
      color: "#2196f3",
      icon: "https://img.icons8.com/ios-filled/40/ffffff/question-mark.png",
      text: "For loans up to ₹2 lakhs, lenders should offer constructive post-disbursement support to address genuine lender-related difficulties faced by borrowers."
    },
    {
      color: "#16a085",
      icon: "https://img.icons8.com/ios-filled/40/ffffff/home-page.png",
      text: "Before recalling the loan, accelerating payment, demanding additional security, lenders should provide borrowers with notice as per the loan agreement or a reasonable timeframe if not specified."
    },
    {
      color: "#ff7f32",
      icon: "https://img.icons8.com/ios-filled/40/ffffff/document--v1.png",
      text: "Upon full loan repayment or realization, lenders should release all securities, except in cases of legitimate liens or other outstanding claims, for which borrowers must receive detailed notice."
    }
  ];
  return (
    <section className="post-disbursement-section">
      <img src={postDisbursementImg} alt="Post Disbursement" className="post-disbursement-img" />
      <div className="post-disbursement-title">Post-Disbursement Monitoring</div>
      <div className="post-disbursement-cards">
        {items.map((item, i) => (
          <div className="post-disbursement-card" key={i} style={{background: item.color}}>
            <img src={item.icon} alt="icon" className="post-disbursement-icon" />
            <div className="post-disbursement-text">{item.text}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

function GeneralProvisionsSection() {
  const items = [
    {
      icon: "https://img.icons8.com/ios-filled/40/ffffff/document--v1.png",
      color: "#f44336",
      text: "No interference in borrowers' affairs unless required under the Loan Agreement or due to new disclosures."
    },
    {
      icon: "https://img.icons8.com/ios-filled/40/ffffff/money-bag.png",
      color: "#ffb300",
      text: "No discrimination based on sex, caste, or religion"
    },
    {
      icon: "https://img.icons8.com/ios-filled/40/ffffff/swap.png",
      color: "#00bcd4",
      text: "Requests to transfer loans to other institutions will be addressed within 21 days."
    },
    {
      icon: "https://img.icons8.com/ios-filled/40/ffffff/refresh.png",
      color: "#2196f3",
      text: "Recovery will be done ethically and fairly without undue pressure or harassment."
    },
    {
      icon: "https://img.icons8.com/ios-filled/40/ffffff/gavel.png",
      color: "#37474f",
      text: "In case of default, legal action will be preceded by appropriate communication."
    }
  ];
  return (
    <section className="general-provisions-section">
      <div className="general-provisions-title">General Provisions</div>
      <div className="general-provisions-cards">
        {items.map((item, i) => (
          <div className="general-provisions-card" key={i} style={{borderTop: `6px solid ${item.color}`}}>
            <div className="general-provisions-icon" style={{background: item.color}}>
              <img src={item.icon} alt="icon" />
            </div>
            <div className="general-provisions-text">{item.text}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

function ConfidentialitySection() {
  const items = [
    "As mandated by law or regulators;",
    "With the customer's explicit consent;",
    "When it is in the public interest or under a legal obligation."
  ];
  return (
    <section className="confidentiality-section">
      <div className="confidentiality-title">Confidentiality of Information</div>
      <div className="confidentiality-hex-row">
        {items.map((text, i) => (
          <div className="confidentiality-hex" key={i}>
            <div className="confidentiality-hex-num">{i+1}</div>
            <div className="confidentiality-hex-text">{text}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

function LanguageCommunicationSection() {
  return (
    <section className="language-comm-section">
      <div className="language-comm-row">
        <div className="language-comm-card left">
          <div className="language-comm-icon" role="img" aria-label="language">🈺</div>
          <div className="language-comm-text">
            This FPC will be available on the Company's website in English and local vernacular language.
          </div>
        </div>
        <div className="language-comm-center">
          <div className="language-comm-circle">
            <div className="language-comm-circle-title">Language and Communication</div>
          </div>
        </div>
        <div className="language-comm-card right">
          <div className="language-comm-icon" role="img" aria-label="communication">🗣️</div>
          <div className="language-comm-text">
            All customer communication shall be in a language understandable to the borrower.
          </div>
        </div>
      </div>
    </section>
  );
}

function RegulationOfInterestRatesSection() {
  return (
    <section className="regulation-interest-section">
      {/* <div className="regulation-interest-img-col">
        <img src={regulationInterestImg} alt="Regulation of Interest Rates" className="regulation-interest-img" />
      </div> */}
      {/* <div className="regulation-interest-content">
        <div className="regulation-interest-title">Regulation of Interest Rates</div>
        <ul className="regulation-interest-list">
          <li>Interest rates will be determined by the Board based on cost of funds, risk premium, Opex, and market trends</li>
          <li>The Company maintains a separate Interest Rate Policy.</li>
          <li>All rates communicated will be in annualised terms to ensure transparency.</li>
        </ul>
        <div className="regulation-interest-divider"></div> 
      </div>*/}

      <div className="regulation-image-container">
      <img src={"8.png"} alt="Commitment handshake" />
      </div>
    </section>
  );
}

function PenalChargesSection() {
  const items = [
    {
      color: "#1fd1c7",
      icon: "https://img.icons8.com/ios-filled/40/ffffff/maintenance.png",
      title: "Penal charges, not penal interest",
      text: "Levy penalties as separate charges, not added to the interest rate. No interest can be compounded on these charges."
    },
    {
      color: "#1fa2ff",
      icon: "https://img.icons8.com/ios-filled/40/ffffff/combo-chart--v1.png",
      title: "No additional interest components",
      text: "Ensure compliance without adding extra elements to the interest rate."
    },
    {
      color: "#a259e6",
      icon: "https://img.icons8.com/ios-filled/40/ffffff/approval--v1.png",
      title: "Board-approved policy",
      text: "Formulate a clear policy on all types of penal charges."
    },
    {
      color: "#1fd1c7",
      icon: "https://img.icons8.com/ios-filled/40/ffffff/compare.png",
      title: "Reasonable and non-discriminatory",
      text: "Penalties should be proportionate to the non-compliance and not discriminatory within the same loan category."
    },
    {
      color: "#1fd1c7",
      icon: "https://img.icons8.com/ios-filled/40/ffffff/user-group-man-man.png",
      title: "Fairness to individual borrowers",
      text: "Penal charges for non-business individual borrowers cannot exceed those for non-individual borrowers for similar non-compliance."
    },
    {
      color: "#1fa2ff",
      icon: "https://img.icons8.com/ios-filled/40/ffffff/visible.png",
      title: "Transparent disclosure",
      text: "Clearly disclose the amount and reason for penal charges in loan agreements, KFS, and on the NBFC's website."
    },
    {
      color: "#1fa2ff",
      icon: "https://img.icons8.com/ios-filled/40/ffffff/megaphone.png",
      title: "Communication of levy",
      text: "Inform borrowers about applicable penal charges in reminders for non-compliance and whenever such charges are levied, stating the reason."
    }
  ];
  return (
    <section className="penal-charges-section">
      <div className="penal-charges-title">Penal Charges</div>
      <div className="penal-charges-timeline">
        <div className="penal-charges-line"></div>
        {items.map((item, i) => (
          <div className="penal-charges-row" key={i}>
            <div className="penal-charges-num-circle">{String(i+1).padStart(2, '0')}</div>
            <div className="penal-charges-card" style={{background: item.color}}>
              <div className="penal-charges-card-title">{item.title}</div>
              <div className="penal-charges-card-text">{item.text}</div>
              <div className="penal-charges-card-icon"><img src={item.icon} alt="icon" /></div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function MicrofinanceLoansSection() {
  return (
    <section className="microfinance-section">
      {/* <div className="microfinance-content">
        <div className="microfinance-title">FAIR PRACTICE CODE FOR MICROFINANCE LOANS</div>
        <div className="microfinance-subtitle">a. General</div>
        <ul className="microfinance-list">
          <li>The FPC in vernacular language shall be displayed in its office and branch premises, as well as on the company's website.</li>
          <li>Train field staff to inquire about borrower income and existing debt.</li>
          <li>Any borrower training offered will be free.</li>
          <li>Display minimum, maximum, and average microfinance interest rates prominently in offices, vernacular literature, and on the website.</li>
          <li>The loan agreement and displayed FPC (office, branch, website) will declare the company's accountability for inappropriate employee (including outsourced) behaviour and commitment to timely grievance redressal.</li>
          <li>No security deposit or margin will be collected from borrowers.</li>
          <li>The company will use a standard microfinance loan agreement, preferably in the local language.</li>
          <li>All loan terms and conditions will be disclosed in the loan agreement.</li>
          <li>The loan card will clearly show: a simplified pricing factsheet, all loan terms, borrower identification, repayment acknowledgements (including final discharge), the grievance redressal system and nodal officer contact details.</li>
          <li>Non-credit products issued shall be with full consent of the borrowers and fee structure shall be communicated in the loan card itself,</li>
          <li>All entries in the loan card shall be in the vernacular language or the language as understood by the borrower.</li>
        </ul>
      </div> */}

      <div className="microfinance-image-container">
      <img src={"microfinance.png"} alt="Commitment handshake" />
    </div>
    </section>
  );
}

function NonCoerciveRecoverySection() {
  // const items = [
  //   {
  //     color: "#ff9800",
  //     icon: "https://img.icons8.com/ios-filled/40/ffffff/connection.png",
  //     text: "Recovery shall typically occur at a central designated place. Field staff may only conduct recovery at the borrower's residence or workplace if the borrower misses the central location on two or more consecutive occasions."
  //   },
  //   {
  //     color: "#29597d",
  //     icon: "https://img.icons8.com/ios-filled/40/ffffff/share-2.png",
  //     text: "The Company shall maintain a Board-approved policy governing employee conduct, recruitment, training, and monitoring. This policy will define minimum staff qualifications, provide necessary customer interaction training, include programs fostering appropriate behaviour towards borrowers, and integrate conduct into employee compensation structures"
  //   }
  // ];
  return (
    <section className="noncoercive-section">
      <div className="noncoercive-title">Non-coercive methods of recovery</div>
      {/* <div className="noncoercive-cards">
        {items.map((item, i) => (
          <div className="noncoercive-card" key={i}>
            <div className="noncoercive-ribbon" style={{background: item.color}}>
              <img src={item.icon} alt="icon" />
            </div>
            <div className="noncoercive-text">{item.text}</div>
          </div>
        ))}
      </div> */}  
      <div className="non-coercive-image-container">
        <img src={"non coercive 1.png"} alt="non-coercive-image" className="non-coercive-image" />
      </div>

      <div className="non-coercive-image-container">
        <img src={"non coercive 2.png"} alt="non-coercive-image" />
      </div>

      <div className="non-coercive-image2-container">
        <img src={"responsibility_board.png"} alt="non-coercive-image" className="non-coercive2-image" />
      </div>
    </section>
  );
}

function GrievanceRedressalSection() {
  const items = [
    {
      icon: "https://img.icons8.com/ios-filled/48/ffffff/user-group-man-man.png",
      text: "Prompt and fair resolution of customer complaints;"
    },
    {
      icon: "https://img.icons8.com/ios-filled/48/ffffff/internet--v1.png",
      text: "Display of contact details of the Grievance Officer and RBI Regional Office at all business premises and website;"
    },
    {
      icon: "https://img.icons8.com/ios-filled/48/ffffff/goal.png",
      text: "Escalation protocols and resolution timelines detailed under the Company's <b>Grievance Redressal Policy</b>."
    }
  ];
  return (
    <section className="grievance-section">
      <div className="grievance-title">GRIEVANCE REDRESSAL MECHANISM</div>
      <div className="grievance-desc">Agrim shall establish a robust grievance redressal framework.<br />Key highlights include:</div>
      <div className="grievance-features">
        {items.map((item, i) => (
          <div className="grievance-feature-card" key={i}>
            <div className="grievance-feature-icon"><img src={item.icon} alt="icon" /></div>
            <div className="grievance-feature-text" dangerouslySetInnerHTML={{__html: item.text}} />
          </div>
        ))}
      </div>
    </section>
  );
}

function ForceMajeureSection() {
  return (
    <section className="force-majeure-section">
      <img src={forceMajeureImg} alt="Force Majeure" className="force-majeure-img" />
      <div className="force-majeure-content">
        <div className="force-majeure-title">FORCE MAJEURE</div>
        <div className="force-majeure-text">
          In exceptional cases of Force Majeure (natural disasters, pandemics, war, regulatory actions, etc.), the commitments under this Code may not be fully enforceable. However, the Company shall make best efforts to fulfill its obligations under such conditions.
        </div>
      </div>
    </section>
  );
}

function ReviewSection() {
  return (
    <section className="review-section">
      <img src={reviewImg} alt="Review" className="review-img" />
      <div className="review-content">
        <div className="review-title">REVIEW</div>
        <div className="review-text">
          This FPC shall be reviewed annually or earlier if mandated by changes in RBI regulations. The Board will ensure the continued relevance and effectiveness of this Code through appropriate modifications from time to time.
        </div>
      </div>
    </section>
  );
}

function DisclaimerSection() {
  return (
    <section className="disclaimer-section">
      <div className="disclaimer-content">
        <div className="disclaimer-title">DISCLAIMER</div>
        <div className="disclaimer-text">
          All content published on our platform is for general informational purposes. Agrim does not guarantee the accuracy or completeness of such content and disclaims liability for reliance placed upon it.<br /><br />
          <span className="disclaimer-subtext">External websites linked from our platform are not endorsed or verified by us. Their policies may vary and users must exercise caution.</span>
        </div>
      </div>
      <div className="disclaimer-img-col">
        <img src={attentionPleaseImg} alt="Attention Please" className="disclaimer-img" />
      </div>
    </section>
  );
}

function MainContent() {
  return (
    <main className="main-content">
      <img
        src={handshakeImg}
        alt="Handshake"
        className="main-image full-width-image"
      />
      <div id="introduction" className="section">
        <div className="section-title">INTRODUCTION</div>
        <p>
          Agrim Fincap Private Limited ("Agrim" or "the Company") is a Non-Banking Financial Company (NBFC), registered with the Reserve Bank of India (RBI) as a non-deposit taking, non-systemically important NBFC. The Company is primarily engaged in providing personal loans, MSME finance, and other financial services.
        </p>
        <p>
          In line with the RBI guidelines on the Fair Practices Code for NBFCs, Agrim has adopted this Board-approved policy, which outlines transparent practices to be followed while dealing with customers. This Code is designed to foster confidence, promote ethical conduct, and ensure fairness in all customer interactions.
        </p>
      </div>
      <div id="purpose"><PurposeSection /></div>
      <div id="definitions"><DefinitionsSection /></div>
      {/* <div id="key-commitments"><KeyCommitmentsSection /></div> */}
       <div id="commit-image"><CommitImage /></div>
      <div id="fair-practice"><FairPracticeGuidelinesSection /></div>
      <div id="loan-appraisal"><LoanAppraisalSection /></div>
      <div id="loan-disbursement"><LoanDisbursementSection /></div>
      <div id="post-disbursement"><PostDisbursementMonitoringSection /></div>
      <div id="general-provisions"><GeneralProvisionsSection /></div>
      <div id="confidentiality"><ConfidentialitySection /></div>
      <div id="language-communication"><LanguageCommunicationSection /></div>
      <div id="regulation-interest"><RegulationOfInterestRatesSection /></div>
      <div id="penal-charges"><PenalChargesSection /></div>
      <div id="microfinance"><MicrofinanceLoansSection /></div>
      <div id="non-coercive"><NonCoerciveRecoverySection /></div>
      <div id="grievance"><GrievanceRedressalSection /></div>
      <div id="force-majeure"><ForceMajeureSection /></div>
      <div id="review"><ReviewSection /></div>
      <div id="disclaimer"><DisclaimerSection /></div>
    </main>
  );
}

export default App;
