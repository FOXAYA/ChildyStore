import React from "react";
import ash from "../assets/images/ash.png"
import { useLocation } from "react-router-dom";
import styles from "./BabyShop.module.css"; // تأكد من إنشاء وتحديث ملف CSS الخاص بك
import NavbarLayout from "../layouts/NavbarLayout";
import { WaveTop } from "../animation/Wave";

export default function BabyShop() {
  const location = useLocation();
  const { blogImage } = location.state || {}; // استقبال بيانات المدونة كخصائص

  return (
    <div >
      {blogImage ? (
              <>
                  <NavbarLayout />
                  <WaveTop />
                  
                  <div className={styles.container}>
                    <span className={styles.span} >{blogImage.category}</span>
                    <h1 className={styles.title}>{blogImage.title}</h1>
                      <div className={styles.authorInfo}>
                          <img src={ash} alt="ash" className={styles.ash} />
                        <p className={styles.author}>by Ashton Porter</p>
                        <p className={styles.date}>{blogImage.date}</p>
                        <p className={styles.comments}>{blogImage.comments}</p>
                    </div>
                    <div className={styles.imageContainer}>
                          <img src={blogImage.image} alt={blogImage.title} className={styles.image} />
                    </div>
                      
                      
                     </div>
                  </>
    
            ) : (
              <p>No blog post data found.</p>
          )}
      </div>
  );
}