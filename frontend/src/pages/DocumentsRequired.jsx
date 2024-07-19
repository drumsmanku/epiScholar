import { useEffect, useState } from "react";
import axios from 'axios';
import styles from "./DocumentsRequired.module.css";

const DocumentsRequired = () => {
  const [data, setData] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get( 'https://epischolar.onrender.com/api/globe-data');
        setData(response.data[0]);
        console.log(response.data);

      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className={styles.documentsRequired}>
      <div className={styles.documentsRequired1}>
        <img className={styles.ringsIcon} alt="" src="/rings.svg" />
        <div className={styles.bubbles}>
          {data["Application Form"] && (
            <div className={styles.applicationFormParent}>
              <b className={styles.applicationForm}>Application Form</b>
              <div className={styles.completedAndSignedContainer}>
                <p className={styles.completedAndSigned}>{data["Application Form"]}</p>
              </div>
            </div>
          )}
          {data["Guarantor Form"] && (
            <div className={styles.guarantorFormParent}>
              <b className={styles.guarantorForm}>Guarantor Form</b>
              <div className={styles.ifRequiredDulyContainer}>
                <ul className={styles.ifRequiredDulyFilledAndS}>
                  {data["Guarantor Form"].split('\n').map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          )}
          {data["Photographs"] && (
            <div className={styles.photographsParent}>
              <b className={styles.applicationForm}>Photographs</b>
              <div className={styles.completedAndSignedContainer}>
                <p className={styles.completedAndSigned}>{data["Photographs"]}</p>
              </div>
            </div>
          )}
          {data["Residence Proof"] && (
            <div className={styles.residenceProofParent}>
              <b className={styles.guarantorForm}>Residence Proof</b>
              <div className={styles.completedAndSignedContainer}>
                <p className={styles.completedAndSigned}>Any one of the following:</p>
                <ul className={styles.ifRequiredDulyFilledAndS}>
                  {data["Residence Proof"].split('\n').map((item, index) => (
                    <li key={index} className={styles.passport}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          )}
          {data["Academic Records"] && (
            <div className={styles.academicRecordsParent}>
              <b className={styles.guarantorForm}>Academic Records</b>
              <div className={styles.ifRequiredDulyContainer}>
                <ul className={styles.ifRequiredDulyFilledAndS}>
                  {data["Academic Records"].split('\n').map((item, index) => (
                    <li key={index} className={styles.passport}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          )}
          {data["Property Documents"] && (
            <div className={styles.propertyDocumentsParent}>
              <b className={styles.guarantorForm}>Property Documents</b>
              <div className={styles.ifRequiredDulyContainer}>
                <ul className={styles.ifRequiredDulyFilledAndS}>
                  {data["Property Documents"].split('\n').map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          )}
          {data["Bank Statements"] && (
            <div className={styles.bankStatementsParent}>
              <b className={styles.guarantorForm}>Bank Statements</b>
              <div className={styles.ifRequiredDulyContainer}>
                <ul className={styles.ifRequiredDulyFilledAndS}>
                  {data["Bank Statements"].split('\n').map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          )}
          {data["Identity Proof"] && (
            <div className={styles.identityProofParent}>
              <b className={styles.guarantorForm}>Identity Proof</b>
              <div className={styles.completedAndSignedContainer}>
                <p className={styles.completedAndSigned}>Any one of the following:</p>
                <ul className={styles.ifRequiredDulyFilledAndS}>
                  {data["Identity Proof"].split('\n').map((item, index) => (
                    <li key={index} className={styles.passport}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          )}
          {data["Additional Documents"] && (
            <div className={styles.additionalDocumentsParent}>
              <b className={styles.guarantorForm}>Additional Documents</b>
              <div className={styles.completedAndSignedContainer}>
                <ul className={styles.ifRequiredDulyFilledAndS}>
                  {data["Additional Documents"].split('\n').map((item, index) => (
                    <li key={index}> {item}</li>
                  ))}
                </ul>
              </div>
            </div>
          )}
          {data["Income Proof"] && (
            <div className={styles.x250}>
              <b className={styles.guarantorForm}>Income Proof</b>
              <div className={styles.forSalariedIndividualsContainer}>
                <ul className={styles.ifRequiredDulyFilledAndS}>
                  {data["Income Proof"].split('\n').map((item, index) => (
                    <li key={index} className={styles.passport}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          )}
        </div>
        <b className={styles.documentsRequiredFor}>
          Documents Required for Study Abroad Loan
        </b>
      </div>
    </div>
  );
};

export default DocumentsRequired;
