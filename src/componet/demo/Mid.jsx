import React from 'react'
import "../Contact.css"
import "../../componet/color.css"
import imagecoding from "./images/imagecoding.jpg"
import imageproject from "./images/imageprojects.png"
import imagecertificate from "./images/imagecertificate.jpeg"
import right from "./images/right.png"
import cv from "../pdf/cv.pdf"
function Mid() {
  return (
    <div><main>
    <section class="firstSection">

        <div class="leftSection">"Hello, Iam <span class="green">Shubham Butola</span>
            <div>and I am passionate </div>
            <span id="element"></span>
            <div class="buttons">
                
                <a href={cv} class="btn" target='_blank'>Download cv</a>
                <a href="https://github.com/butola9730" target='_blank' class="btn">Visit Gitub</a>

            </div>

        </div>
        <div class="rightSection">
            <img src={right} alt=""/>
        </div>
    </section>
    
    <section class="secondsection">
        <span class="grey">What I have done in Btech</span>
        <h1>About Knowledge and Skills</h1>
        <div class="box">
            <div class="vertical">
                <img className='image-4' src ={imagecoding} alt=""/>
                <div class="vertical-title">
                    Languages
                </div>
                <div class="vertical-desc">
                <ul>
                    <li>Java</li>
                    <li>C</li>
                    <li>Python</li>
                    <li>C++</li>
                    <li>Html</li>
                    <li>Css</li>
                    <li>JavaScript</li>
                </ul>
                </div>
            </div>
            <div class="vertical">
                <img class="image-2" src={imageproject} alt=""/>
                <div class="vertical-title">
                    Projects
                </div>
                <div class="vertical-desc">
                    <ul>
                        <li>Website Project</li>
                        <li>Mini Server Project with Python</li>
                        <li>Portfoli Project </li>
                    </ul>
                </div>
            </div>
            <div class="vertical">
                <img class="image-3" src={imagecertificate} width="70px" alt=""/>
                <div class="vertical-title">
                    Certificates
                </div>
                <div class="vertical-desc">
                    <ul>
                        <li>Netwrok-Security </li>
                        <li>Java</li>
                        <li>Python</li>
                    </ul>
                </div>
            </div>
            <div class="vertical">
                <img class="image-4" src={imagecoding} alt=""/>
                <div class="vertical-title">
                    Remaning
                </div>
                <div class="vertical-desc">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste non distinctio fugiat esse? Eius
                    porro iusto enim suscipit, alias deserunt nobis aspernatur esse.
                </div>
            </div>

           
        </div>
    </section>

</main></div>
  )
}

export default Mid