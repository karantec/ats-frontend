import Link from 'next/link'
import Breadcrumb from '@/components/common/Breadcrumb'
import Newslatter from '@/components/common/Newslatter'
import Footer from '@/components/footer/Footer'
import Header from '@/components/header/Header'
import Topbar from '@/components/topbar/Topbar'



export const metadata = {
  title: "TripRex - Tour & Travel Agency  NextJs Template",
  description: "TripRex is a NextJs Template for Tour and Travel Agency purpose",
  icons: {
    icon: "/assets/img/sm-logo.svg",
  },
};


const page = () => {
  return (
    <>
      <Topbar />
      <Header />  
      <Breadcrumb pagename="BLog Details" pagetitle="BLog Details"/>
      <div className="blog-details-section pt-120 mb-120">
        <div className="container">
          <div className="row g-lg-4 gy-5 justify-content-center">
            <div className="col-lg-8">
              <div className="post-thumb mb-30">
                <img src="/assets/img/innerpage/blog-standard-img2.jpg" alt="" />
              </div>
              <div className="post-title mb-40">
                <h1>Our Begin Now Todo Beingon What You Will Be own fully gone.</h1>
              </div>
              <div className="blog-meta two mb-50">
                <div className="author-area">
                  <div className="author-img">
                    <img src="/assets/img/innerpage/blog-meta-author-img.png" alt="" />
                  </div>
                  <div className="author-content">
                    <h6>By, <Link href="/blog">Cooper Jogan</Link></h6>
                  </div>
                </div>
                <ul>
                  <li>
                    <svg xmlns="http://www.w3.org/2000/svg" width={12} height={16} viewBox="0 0 12 16">
                      <path d="M7.80968 15.0679C9.5273 12.1176 8.80817 8.40483 6.09966 6.24033C6.09808 6.23911 6.0965 6.23758 6.09523 6.23666L6.10694 6.26482L6.10504 6.28594C6.63276 7.63466 6.55873 9.11531 5.91047 10.3857L5.45362 11.2813L5.31347 10.2917C5.21824 9.62039 4.95659 8.98001 4.55353 8.43177H4.48994L4.4564 8.33993C4.46115 9.3657 4.23778 10.3762 3.7996 11.3294C3.22474 12.5768 3.30922 14.0152 4.02581 15.1778L4.52031 15.9804L3.63066 15.6168C2.16361 15.0171 0.990804 13.8618 0.412783 12.4473C-0.234842 10.8678 -0.114934 9.03633 0.733906 7.54925C1.17652 6.77572 1.48657 5.95443 1.65583 5.10773L1.82129 4.27787L2.24334 5.01804C2.44487 5.37098 2.59326 5.75301 2.68532 6.15432L2.69481 6.16381L2.70462 6.22809L2.71379 6.22533C3.97804 4.6002 4.73545 2.57805 4.84586 0.530486L4.87434 0L5.33435 0.290191C7.21173 1.47391 8.51552 3.37301 8.91827 5.5069L8.92744 5.55067L8.93219 5.5574L8.95275 5.52924C9.3207 5.05906 9.51496 4.4998 9.51496 3.91115V2.99956L10.0835 3.72626C11.4053 5.41537 12.083 7.51068 11.9919 9.62651C11.8799 12.117 10.4761 14.3029 8.23648 15.4873L7.26678 16L7.80968 15.0679Z" />
                    </svg>
                    3.9K View
                  </li>
                  <li>
                    <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 16 16">
                      <g>
                        <path d="M8 0C3.60594 0 0 3.60594 0 8C0 12.3941 3.60594 16 8 16C12.3941 16 16 12.3941 16 8C16 3.60594 12.3941 0 8 0ZM11.646 3.69106C11.8291 3.508 12.1259 3.508 12.3089 3.69106C12.492 3.87413 12.492 4.17091 12.3089 4.35397C12.1259 4.53703 11.8291 4.53703 11.646 4.35397C11.463 4.17091 11.463 3.87413 11.646 3.69106ZM7.53125 2.375C7.53125 2.11591 7.74091 1.90625 8 1.90625C8.25909 1.90625 8.46875 2.11591 8.46875 2.375V3.3125C8.46875 3.57159 8.25909 3.78125 8 3.78125C7.74091 3.78125 7.53125 3.57159 7.53125 3.3125V2.375ZM2.375 8.46875C2.11591 8.46875 1.90625 8.25909 1.90625 8C1.90625 7.74091 2.11591 7.53125 2.375 7.53125H3.3125C3.57159 7.53125 3.78125 7.74091 3.78125 8C3.78125 8.25909 3.57159 8.46875 3.3125 8.46875H2.375ZM4.35397 12.3089C4.17091 12.492 3.87413 12.492 3.69106 12.3089C3.508 12.1259 3.508 11.8291 3.69106 11.646C3.87413 11.4629 4.17091 11.4629 4.35397 11.646C4.53703 11.8291 4.53703 12.1259 4.35397 12.3089ZM4.35397 4.35397C4.17091 4.53703 3.87413 4.53703 3.69106 4.35397C3.508 4.17091 3.508 3.87413 3.69106 3.69106C3.87413 3.508 4.17091 3.508 4.35397 3.69106C4.53703 3.87413 4.53703 4.17091 4.35397 4.35397ZM8.46875 13.625C8.46875 13.8841 8.25909 14.0938 8 14.0938C7.74091 14.0938 7.53125 13.8841 7.53125 13.625V12.6875C7.53125 12.4284 7.74091 12.2188 8 12.2188C8.25909 12.2188 8.46875 12.4284 8.46875 12.6875V13.625ZM11.1439 11.1439C10.9608 11.327 10.6642 11.327 10.4811 11.1439L7.66856 8.33141C7.58069 8.24353 7.53125 8.1245 7.53125 8V5.1875C7.53125 4.92841 7.74091 4.71875 8 4.71875C8.25909 4.71875 8.46875 4.92841 8.46875 5.1875V7.80591L11.1439 10.4811C11.327 10.6642 11.327 10.9608 11.1439 11.1439ZM12.3089 12.3089C12.1259 12.492 11.8291 12.492 11.646 12.3089C11.463 12.1259 11.463 11.8291 11.646 11.646C11.8291 11.4629 12.1259 11.4629 12.3089 11.646C12.492 11.8291 12.492 12.1259 12.3089 12.3089ZM14.0938 8C14.0938 8.25909 13.8841 8.46875 13.625 8.46875H12.6875C12.4284 8.46875 12.2188 8.25909 12.2188 8C12.2188 7.74091 12.4284 7.53125 12.6875 7.53125H13.625C13.8841 7.53125 14.0938 7.74091 14.0938 8Z" />
                      </g>
                    </svg>
                    5 Min reads
                  </li>
                  <li>
                    <a href="#comment-area">
                      <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 16 16">
                        <g>
                          <path d="M14.5672 14.9619C14.5917 15.0728 14.5913 15.1878 14.5658 15.2986C14.5403 15.4093 14.4905 15.513 14.42 15.6021C14.3494 15.6912 14.2599 15.7635 14.158 15.8136C14.056 15.8638 13.9441 15.8906 13.8305 15.8922C13.7133 15.8916 13.5977 15.8643 13.4925 15.8124L12.1483 15.1555C10.8921 15.6143 9.51644 15.6277 8.2515 15.1936C6.98655 14.7595 5.90904 13.9042 5.19922 12.7708C6.15026 12.8941 7.11661 12.8159 8.03545 12.5413C8.95429 12.2667 9.80505 11.8018 10.5324 11.1768C11.2598 10.5518 11.8476 9.78079 12.2575 8.91379C12.6674 8.0468 12.8902 7.10326 12.9116 6.14449C12.9119 5.70944 12.8674 5.27551 12.7787 4.84961C13.6879 5.29062 14.4611 5.96909 15.0165 6.81329C15.572 7.65749 15.8891 8.63608 15.9342 9.64561C15.9643 10.4111 15.8346 11.1744 15.5535 11.887C15.2724 12.5996 14.846 13.2459 14.3014 13.7847L14.5672 14.9619Z" />
                          <path d="M6.0757 0.216195C4.48484 0.198449 2.95187 0.812289 1.81293 1.92312C0.673981 3.03395 0.0220199 4.5511 1.29169e-06 6.1419C-0.000538167 6.94954 0.167902 7.74837 0.494497 8.48703C0.821091 9.22569 1.29861 9.88786 1.89638 10.431L1.65183 11.7365C1.63148 11.8461 1.63545 11.9588 1.66346 12.0668C1.69147 12.1747 1.74285 12.2751 1.81395 12.361C1.88505 12.4469 1.97414 12.5161 2.07493 12.5638C2.17572 12.6114 2.28575 12.6364 2.39724 12.6368C2.52333 12.6366 2.64739 12.6052 2.75837 12.5453L4.19679 11.7726C4.8041 11.9674 5.43791 12.067 6.0757 12.068C7.66662 12.0857 9.19965 11.4718 10.3386 10.3609C11.4776 9.25002 12.1295 7.73277 12.1514 6.1419C12.1294 4.5511 11.4774 3.03395 10.3385 1.92312C9.19953 0.812289 7.66656 0.198449 6.0757 0.216195ZM3.79731 7.05136C3.64711 7.05136 3.50027 7.00681 3.37538 6.92336C3.25049 6.83991 3.15314 6.7213 3.09566 6.58253C3.03818 6.44375 3.02314 6.29105 3.05244 6.14373C3.08175 5.99641 3.15408 5.86109 3.26029 5.75487C3.36651 5.64866 3.50183 5.57633 3.64915 5.54702C3.79647 5.51772 3.94917 5.53276 4.08795 5.59024C4.22672 5.64772 4.34533 5.74507 4.42878 5.86996C4.51223 5.99485 4.55678 6.14169 4.55678 6.29189C4.55678 6.49332 4.47676 6.68649 4.33433 6.82891C4.19191 6.97134 3.99874 7.05136 3.79731 7.05136ZM6.0757 7.05136C5.92549 7.05136 5.77866 7.00681 5.65377 6.92336C5.52887 6.83991 5.43153 6.7213 5.37405 6.58253C5.31657 6.44375 5.30153 6.29105 5.33083 6.14373C5.36013 5.99641 5.43247 5.86109 5.53868 5.75487C5.64489 5.64866 5.78022 5.57633 5.92754 5.54702C6.07486 5.51772 6.22756 5.53276 6.36633 5.59024C6.50511 5.64772 6.62372 5.74507 6.70717 5.86996C6.79062 5.99485 6.83516 6.14169 6.83516 6.29189C6.83516 6.49332 6.75515 6.68649 6.61272 6.82891C6.47029 6.97134 6.27712 7.05136 6.0757 7.05136ZM8.35409 7.05136C8.20388 7.05136 8.05704 7.00681 7.93215 6.92336C7.80726 6.83991 7.70992 6.7213 7.65244 6.58253C7.59495 6.44375 7.57991 6.29105 7.60922 6.14373C7.63852 5.99641 7.71085 5.86109 7.81707 5.75487C7.92328 5.64866 8.0586 5.57633 8.20592 5.54702C8.35324 5.51772 8.50595 5.53276 8.64472 5.59024C8.78349 5.64772 8.90211 5.74507 8.98556 5.86996C9.06901 5.99485 9.11355 6.14169 9.11355 6.29189C9.11355 6.49332 9.03354 6.68649 8.89111 6.82891C8.74868 6.97134 8.55551 7.05136 8.35409 7.05136Z" />
                        </g>
                      </svg>
                      840 Comment
                    </a>
                  </li>
                </ul>
              </div> 
              <p className="first-para">NSuspendisse bibendum efficitur orci, a pretium erat mattis nec. Vestibulum antema ypsumi primisot inaetahsjanl faucibus orci luctus etenjot ultrices posuere cubilia andt.</p>
              <p className="second-para">Vestibulum quis odio ut dui malesuada ornare ut id tellus. Curabitur viverra at magna ac bibendum. Aliquam erat volutpat. Proin rhoncus est ac ipsum varius fermentum. Integer a odio ornare mauris pharetra suscipitot. Integer vulputate elit erat. Vestibulum quam velit, sagittis et ipsum id, faucibus volutpat nibh. Quisque cotten commodo massa eget fringilla facilisis. Integer non nisl elit. In ac tempor ante, eget iaculis augue. Nuncekon dolor mi, accumsan quis ante id, eleifend suscipit purus. Praesent augue eros, consectetur eu eleifend inno, eget condimentum auctor, libero ipsum viverra nisi, at vulputate ex mi suscipit nunc. </p>
              <blockquote> 
                <div className="quoat-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width={26} height={18} viewBox="0 0 26 18">
                    <path d="M20.6832 6.05443L20.4534 6.62147L21.0549 6.73371C23.6453 7.21714 25.5 9.46982 25.5 12.0337C25.5 13.573 24.8343 15.0529 23.6667 16.09C22.4982 17.1192 20.9207 17.6286 19.3329 17.4722C16.4907 17.1844 14.2846 14.6588 14.3404 11.7032C14.4201 7.67759 15.8945 5.07458 17.6289 3.38578C19.3761 1.68459 21.4158 0.884497 22.6452 0.531618L22.6591 0.527628L22.6728 0.52284C22.7152 0.507954 22.7704 0.5 22.8713 0.5C23.1425 0.5 23.3799 0.624329 23.5265 0.85037L23.5277 0.852289C23.7128 1.13485 23.6857 1.4981 23.4524 1.75822L23.4523 1.75827C22.2163 3.13698 21.2806 4.57999 20.6832 6.05443Z" stroke="white" />
                    <path d="M6.84136 6.05442L6.61159 6.62147L7.21303 6.73371C9.80353 7.21714 11.6582 9.46983 11.6582 12.0337C11.6582 13.573 10.9925 15.0529 9.82487 16.09C8.65615 17.1194 7.07865 17.6285 5.50008 17.4722C2.67976 17.1842 0.498651 14.7207 0.498651 11.8126V11.6985C0.579458 7.67556 2.05336 5.07393 3.7871 3.38579C5.53424 1.6846 7.574 0.884504 8.8034 0.531628L8.81731 0.527636L8.83096 0.522848C8.8734 0.507959 8.92859 0.500008 9.02944 0.500008C9.3007 0.500008 9.53807 0.624359 9.68459 0.850338L9.6859 0.852327C9.87103 1.13488 9.84386 1.49811 9.61059 1.75823L9.61054 1.75828C8.37446 3.13698 7.43881 4.57999 6.84136 6.05442Z" stroke="white" />
                  </svg>
                </div>
                <p>The business consulting process involves a series of steps that consultants follow when working with clients to address specific challenges, improve operations, or achieve organizational goals.</p>
                <cite>Leslie Alexander</cite>
              </blockquote>
              <p>Vestibulum quis odio ut dui malesuada ornare ut id tellus. Curabitur viverra at magna ac bibendum. Aliquam erat volutpat. Proin rhoncus est ac ipsum varius fermentum. Integer a odio ornare mauris pharetra suscipitot. Integer vulputate elit erat. Vestibulum quam velit, sagittis et ipsum id, faucibus volutpat nibh. Quisque cotten commodo massa eget fringilla facilisis. Integer non nisl elit. In ac tempor ante, eget iaculis augue. Nuncekon dolor mi, accumsan quis ante id, eleifend suscipit purus. Praesent augue eros, consectetur eu eleifend inno, eget condimentum auctor, libero ipsum viverra nisi, at vulputate ex mi suscipit nunc.</p>
              <div className="post-thumb pt-50 mb-50">
                <img src="/assets/img/innerpage/blog-details-img1.jpg" alt="" />
              </div>
              <h2>Our Begin Now To Beingonl.</h2>
              <p>Vestibulum quis odio ut dui malesuada ornare ut id tellus. Curabitur viverra at magna ac bibendum. Aliquam erat volutpat. Proin rhoncus est ac ipsum varius fermentum. Integer a odio ornare mauris pharetra suscipitot. Integer vulputate elit erat. Vestibulum quam velit, sagittis et ipsum id. </p>
              <div className="tag-and-social-area mb-30">
                <div className="bolg-tag">
                  <ul className="tag-list">
                    <li>
                      <Link href="/blog">Adventure</Link>
                    </li>
                    <li>
                      <Link href="/blog">City Tour</Link>
                    </li>
                    <li>
                      <Link href="/blog">Road Trip </Link>
                    </li>
                    <li>
                      <Link href="/blog">Tourism</Link>
                    </li>
                  </ul>
                </div>
                <div className="social-area">
                  <h6>Share On:</h6>
                  <ul className="social-link">
                    <li><a href="https://www.facebook.com/"><i className="bx bxl-facebook" /></a></li>
                    <li>
                      <a href="https://twitter.com/">
                        <svg xmlns="http://www.w3.org/2000/svg" width={12} height={12} fill="currentColor" className="bi bi-twitter-x" viewBox="0 0 16 16">
                          <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865l8.875 11.633Z">
                          </path>
                        </svg>
                      </a>
                    </li>
                    <li><a href="https://www.pinterest.com/"><i className="bx bxl-pinterest-alt" /></a></li>
                    <li><a href="https://www.instagram.com/"><i className="bx bxl-instagram" /></a></li>
                  </ul>
                </div>
              </div>
              <div className="row mb-100">
                <div className="col-lg-12">
                  <div className="details-navigation">
                    <div className="single-navigation">
                      <a className="arrow" href="#blog-details">
                        <svg width={9} height={15} viewBox="0 0 8 13" xmlns="http://www.w3.org/2000/svg">
                          <path d="M0 6.50008L8 0L2.90909 6.50008L8 13L0 6.50008Z" />
                        </svg>
                      </a>
                      <div className="content">
                        <a href="blog-details">Prev Post</a>
                        <h6><a href="blog-details">Consulting vs. In-House Expertise: Finding the Right Balance</a></h6>
                      </div>
                    </div>
                    <div className="single-navigation two text-end">
                      <div className="content">
                        <a href="blog-details">Next Post</a>
                        <h6><a href="blog-details">Consulting Industry Adapts to the Changing Business Landscape</a></h6>
                      </div>
                      <a className="arrow" href="blog-details">
                        <svg width={9} height={15} viewBox="0 0 8 13" xmlns="http://www.w3.org/2000/svg">
                          <path d="M8 6.50008L0 0L5.09091 6.50008L0 13L8 6.50008Z" />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="comment-area" id="comment-area">
                  <div className="comment-title">
                    <h4>Comments (03)</h4>
                    <div className="dash" />
                  </div>
                  <ul className="comment">
                    <li>
                      <div className="single-comment-area">
                        <div className="author-img">
                          <img src="/assets/img/innerpage/comment-author-01.jpg" alt="" />
                        </div>
                        <div className="comment-content">
                          <div className="author-name-deg">
                            <h6>Mr. Bowmik Haldar,</h6>
                            <span>05 June, 2023</span>
                          </div>
                          <p>However, here are some well-regarded car dealerships known for their customer service, inventory, and overall reputation. It's always a good idea to research and read reviews specific...</p>
                          <div className="replay-btn">
                            <svg xmlns="http://www.w3.org/2000/svg" width={14} height={11} viewBox="0 0 14 11">
                              <path d="M8.55126 1.11188C8.52766 1.10118 8.50182 1.09676 8.47612 1.09903C8.45042 1.1013 8.42569 1.11018 8.40419 1.12486C8.3827 1.13954 8.36513 1.15954 8.35311 1.18304C8.34109 1.20653 8.335 1.23276 8.33539 1.25932V2.52797C8.33539 2.67388 8.2791 2.81381 8.17889 2.91698C8.07868 3.02016 7.94277 3.07812 7.80106 3.07812C7.08826 3.07812 5.64984 3.08362 4.27447 3.98257C3.2229 4.66916 2.14783 5.9191 1.50129 8.24735C2.59132 7.16575 3.83632 6.57929 4.92635 6.2679C5.59636 6.07737 6.28492 5.96444 6.97926 5.93121C7.26347 5.91835 7.54815 5.92129 7.83205 5.94001H7.84594L7.85129 5.94111L7.80106 6.48906L7.85449 5.94111C7.98638 5.95476 8.10864 6.01839 8.19751 6.11966C8.28638 6.22092 8.33553 6.35258 8.33539 6.48906V7.75771C8.33539 7.87654 8.45294 7.95136 8.55126 7.90515L12.8088 4.67796C12.8233 4.66692 12.8383 4.65664 12.8537 4.64715C12.8769 4.63278 12.8962 4.61245 12.9095 4.58816C12.9229 4.56386 12.9299 4.53643 12.9299 4.50851C12.9299 4.4806 12.9229 4.45316 12.9095 4.42887C12.8962 4.40458 12.8769 4.38425 12.8537 4.36988C12.8382 4.36039 12.8233 4.35011 12.8088 4.33907L8.55126 1.11188ZM7.26673 7.02381C7.19406 7.02381 7.11391 7.02711 7.02842 7.03041C6.56462 7.05242 5.92342 7.12504 5.21169 7.32859C3.79464 7.7335 2.11684 8.65116 1.00115 10.7175C0.940817 10.8291 0.844683 10.9155 0.729224 10.9621C0.613765 11.0087 0.486168 11.0124 0.368304 10.9728C0.250441 10.9331 0.149648 10.8525 0.0831985 10.7447C0.0167484 10.6369 -0.011219 10.5086 0.0040884 10.3819C0.499949 6.29981 2.01959 4.15202 3.70167 3.05391C5.03215 2.18467 6.40218 2.01743 7.26673 1.98552V1.25932C7.26663 1.03273 7.32593 0.810317 7.43839 0.615545C7.55084 0.420773 7.71227 0.260866 7.90565 0.152696C8.09902 0.0445258 8.31717 -0.00789584 8.53707 0.000962485C8.75698 0.00982081 8.97048 0.0796305 9.15506 0.203025L13.4233 3.43792C13.5998 3.55133 13.7453 3.7091 13.8462 3.8964C13.9471 4.08369 14 4.29434 14 4.50851C14 4.72269 13.9471 4.93333 13.8462 5.12063C13.7453 5.30792 13.5998 5.4657 13.4233 5.57911L9.15506 8.814C8.97048 8.9374 8.75698 9.00721 8.53707 9.01607C8.31717 9.02492 8.09902 8.9725 7.90565 8.86433C7.71227 8.75616 7.55084 8.59626 7.43839 8.40148C7.32593 8.20671 7.26663 7.9843 7.26673 7.75771V7.02381Z" />
                            </svg>
                            Reply (02)
                          </div>
                        </div>
                      </div>
                      <ul className="comment-replay">
                        <li>
                          <div className="single-comment-area">
                            <div className="author-img">
                              <img src="/assets/img/innerpage/comment-author-02.jpg" alt="" />
                            </div>
                            <div className="comment-content">
                              <div className="author-name-deg">
                                <h6>Jacoline Juie,</h6>
                                <span>05 June, 2023</span>
                              </div>
                              <p>However, here are some well-regarded car dealerships known for their customer service, inventory, and overall reputation. It's always a good idea to research and read reviews specific...</p>
                              <div className="replay-btn">
                                <svg xmlns="http://www.w3.org/2000/svg" width={14} height={11} viewBox="0 0 14 11">
                                  <path d="M8.55126 1.11188C8.52766 1.10118 8.50182 1.09676 8.47612 1.09903C8.45042 1.1013 8.42569 1.11018 8.40419 1.12486C8.3827 1.13954 8.36513 1.15954 8.35311 1.18304C8.34109 1.20653 8.335 1.23276 8.33539 1.25932V2.52797C8.33539 2.67388 8.2791 2.81381 8.17889 2.91698C8.07868 3.02016 7.94277 3.07812 7.80106 3.07812C7.08826 3.07812 5.64984 3.08362 4.27447 3.98257C3.2229 4.66916 2.14783 5.9191 1.50129 8.24735C2.59132 7.16575 3.83632 6.57929 4.92635 6.2679C5.59636 6.07737 6.28492 5.96444 6.97926 5.93121C7.26347 5.91835 7.54815 5.92129 7.83205 5.94001H7.84594L7.85129 5.94111L7.80106 6.48906L7.85449 5.94111C7.98638 5.95476 8.10864 6.01839 8.19751 6.11966C8.28638 6.22092 8.33553 6.35258 8.33539 6.48906V7.75771C8.33539 7.87654 8.45294 7.95136 8.55126 7.90515L12.8088 4.67796C12.8233 4.66692 12.8383 4.65664 12.8537 4.64715C12.8769 4.63278 12.8962 4.61245 12.9095 4.58816C12.9229 4.56386 12.9299 4.53643 12.9299 4.50851C12.9299 4.4806 12.9229 4.45316 12.9095 4.42887C12.8962 4.40458 12.8769 4.38425 12.8537 4.36988C12.8382 4.36039 12.8233 4.35011 12.8088 4.33907L8.55126 1.11188ZM7.26673 7.02381C7.19406 7.02381 7.11391 7.02711 7.02842 7.03041C6.56462 7.05242 5.92342 7.12504 5.21169 7.32859C3.79464 7.7335 2.11684 8.65116 1.00115 10.7175C0.940817 10.8291 0.844683 10.9155 0.729224 10.9621C0.613765 11.0087 0.486168 11.0124 0.368304 10.9728C0.250441 10.9331 0.149648 10.8525 0.0831985 10.7447C0.0167484 10.6369 -0.011219 10.5086 0.0040884 10.3819C0.499949 6.29981 2.01959 4.15202 3.70167 3.05391C5.03215 2.18467 6.40218 2.01743 7.26673 1.98552V1.25932C7.26663 1.03273 7.32593 0.810317 7.43839 0.615545C7.55084 0.420773 7.71227 0.260866 7.90565 0.152696C8.09902 0.0445258 8.31717 -0.00789584 8.53707 0.000962485C8.75698 0.00982081 8.97048 0.0796305 9.15506 0.203025L13.4233 3.43792C13.5998 3.55133 13.7453 3.7091 13.8462 3.8964C13.9471 4.08369 14 4.29434 14 4.50851C14 4.72269 13.9471 4.93333 13.8462 5.12063C13.7453 5.30792 13.5998 5.4657 13.4233 5.57911L9.15506 8.814C8.97048 8.9374 8.75698 9.00721 8.53707 9.01607C8.31717 9.02492 8.09902 8.9725 7.90565 8.86433C7.71227 8.75616 7.55084 8.59626 7.43839 8.40148C7.32593 8.20671 7.26663 7.9843 7.26673 7.75771V7.02381Z" />
                                </svg>
                                Reply
                              </div>
                            </div>
                          </div>
                        </li>
                        <li>
                          <div className="single-comment-area">
                            <div className="author-img">
                              <img src="/assets/img/innerpage/comment-author-03.jpg" alt="" />
                            </div>
                            <div className="comment-content">
                              <div className="author-name-deg">
                                <h6>Robert Smith,</h6>
                                <span>05 June, 2023</span>
                              </div>
                              <p>However, here are some well-regarded car dealerships known for their customer service, inventory, and overall reputation. It's always a good idea to research and read reviews specific...</p>
                              <div className="replay-btn">
                                <svg xmlns="http://www.w3.org/2000/svg" width={14} height={11} viewBox="0 0 14 11">
                                  <path d="M8.55126 1.11188C8.52766 1.10118 8.50182 1.09676 8.47612 1.09903C8.45042 1.1013 8.42569 1.11018 8.40419 1.12486C8.3827 1.13954 8.36513 1.15954 8.35311 1.18304C8.34109 1.20653 8.335 1.23276 8.33539 1.25932V2.52797C8.33539 2.67388 8.2791 2.81381 8.17889 2.91698C8.07868 3.02016 7.94277 3.07812 7.80106 3.07812C7.08826 3.07812 5.64984 3.08362 4.27447 3.98257C3.2229 4.66916 2.14783 5.9191 1.50129 8.24735C2.59132 7.16575 3.83632 6.57929 4.92635 6.2679C5.59636 6.07737 6.28492 5.96444 6.97926 5.93121C7.26347 5.91835 7.54815 5.92129 7.83205 5.94001H7.84594L7.85129 5.94111L7.80106 6.48906L7.85449 5.94111C7.98638 5.95476 8.10864 6.01839 8.19751 6.11966C8.28638 6.22092 8.33553 6.35258 8.33539 6.48906V7.75771C8.33539 7.87654 8.45294 7.95136 8.55126 7.90515L12.8088 4.67796C12.8233 4.66692 12.8383 4.65664 12.8537 4.64715C12.8769 4.63278 12.8962 4.61245 12.9095 4.58816C12.9229 4.56386 12.9299 4.53643 12.9299 4.50851C12.9299 4.4806 12.9229 4.45316 12.9095 4.42887C12.8962 4.40458 12.8769 4.38425 12.8537 4.36988C12.8382 4.36039 12.8233 4.35011 12.8088 4.33907L8.55126 1.11188ZM7.26673 7.02381C7.19406 7.02381 7.11391 7.02711 7.02842 7.03041C6.56462 7.05242 5.92342 7.12504 5.21169 7.32859C3.79464 7.7335 2.11684 8.65116 1.00115 10.7175C0.940817 10.8291 0.844683 10.9155 0.729224 10.9621C0.613765 11.0087 0.486168 11.0124 0.368304 10.9728C0.250441 10.9331 0.149648 10.8525 0.0831985 10.7447C0.0167484 10.6369 -0.011219 10.5086 0.0040884 10.3819C0.499949 6.29981 2.01959 4.15202 3.70167 3.05391C5.03215 2.18467 6.40218 2.01743 7.26673 1.98552V1.25932C7.26663 1.03273 7.32593 0.810317 7.43839 0.615545C7.55084 0.420773 7.71227 0.260866 7.90565 0.152696C8.09902 0.0445258 8.31717 -0.00789584 8.53707 0.000962485C8.75698 0.00982081 8.97048 0.0796305 9.15506 0.203025L13.4233 3.43792C13.5998 3.55133 13.7453 3.7091 13.8462 3.8964C13.9471 4.08369 14 4.29434 14 4.50851C14 4.72269 13.9471 4.93333 13.8462 5.12063C13.7453 5.30792 13.5998 5.4657 13.4233 5.57911L9.15506 8.814C8.97048 8.9374 8.75698 9.00721 8.53707 9.01607C8.31717 9.02492 8.09902 8.9725 7.90565 8.86433C7.71227 8.75616 7.55084 8.59626 7.43839 8.40148C7.32593 8.20671 7.26663 7.9843 7.26673 7.75771V7.02381Z" />
                                </svg>
                                Reply
                              </div>
                            </div>
                          </div>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <div className="single-comment-area">
                        <div className="author-img">
                          <img src="/assets/img/innerpage/comment-author-04.jpg" alt="" />
                        </div>
                        <div className="comment-content">
                          <div className="author-name-deg">
                            <h6>Srileka Panday,</h6>
                            <span>05 June, 2023</span>
                          </div>
                          <p>However, here are some well-regarded car dealerships known for their customer service, inventory, and overall reputation. It's always a good idea to research and read reviews specific...</p>
                          <div className="replay-btn">
                            <svg xmlns="http://www.w3.org/2000/svg" width={14} height={11} viewBox="0 0 14 11">
                              <path d="M8.55126 1.11188C8.52766 1.10118 8.50182 1.09676 8.47612 1.09903C8.45042 1.1013 8.42569 1.11018 8.40419 1.12486C8.3827 1.13954 8.36513 1.15954 8.35311 1.18304C8.34109 1.20653 8.335 1.23276 8.33539 1.25932V2.52797C8.33539 2.67388 8.2791 2.81381 8.17889 2.91698C8.07868 3.02016 7.94277 3.07812 7.80106 3.07812C7.08826 3.07812 5.64984 3.08362 4.27447 3.98257C3.2229 4.66916 2.14783 5.9191 1.50129 8.24735C2.59132 7.16575 3.83632 6.57929 4.92635 6.2679C5.59636 6.07737 6.28492 5.96444 6.97926 5.93121C7.26347 5.91835 7.54815 5.92129 7.83205 5.94001H7.84594L7.85129 5.94111L7.80106 6.48906L7.85449 5.94111C7.98638 5.95476 8.10864 6.01839 8.19751 6.11966C8.28638 6.22092 8.33553 6.35258 8.33539 6.48906V7.75771C8.33539 7.87654 8.45294 7.95136 8.55126 7.90515L12.8088 4.67796C12.8233 4.66692 12.8383 4.65664 12.8537 4.64715C12.8769 4.63278 12.8962 4.61245 12.9095 4.58816C12.9229 4.56386 12.9299 4.53643 12.9299 4.50851C12.9299 4.4806 12.9229 4.45316 12.9095 4.42887C12.8962 4.40458 12.8769 4.38425 12.8537 4.36988C12.8382 4.36039 12.8233 4.35011 12.8088 4.33907L8.55126 1.11188ZM7.26673 7.02381C7.19406 7.02381 7.11391 7.02711 7.02842 7.03041C6.56462 7.05242 5.92342 7.12504 5.21169 7.32859C3.79464 7.7335 2.11684 8.65116 1.00115 10.7175C0.940817 10.8291 0.844683 10.9155 0.729224 10.9621C0.613765 11.0087 0.486168 11.0124 0.368304 10.9728C0.250441 10.9331 0.149648 10.8525 0.0831985 10.7447C0.0167484 10.6369 -0.011219 10.5086 0.0040884 10.3819C0.499949 6.29981 2.01959 4.15202 3.70167 3.05391C5.03215 2.18467 6.40218 2.01743 7.26673 1.98552V1.25932C7.26663 1.03273 7.32593 0.810317 7.43839 0.615545C7.55084 0.420773 7.71227 0.260866 7.90565 0.152696C8.09902 0.0445258 8.31717 -0.00789584 8.53707 0.000962485C8.75698 0.00982081 8.97048 0.0796305 9.15506 0.203025L13.4233 3.43792C13.5998 3.55133 13.7453 3.7091 13.8462 3.8964C13.9471 4.08369 14 4.29434 14 4.50851C14 4.72269 13.9471 4.93333 13.8462 5.12063C13.7453 5.30792 13.5998 5.4657 13.4233 5.57911L9.15506 8.814C8.97048 8.9374 8.75698 9.00721 8.53707 9.01607C8.31717 9.02492 8.09902 8.9725 7.90565 8.86433C7.71227 8.75616 7.55084 8.59626 7.43839 8.40148C7.32593 8.20671 7.26663 7.9843 7.26673 7.75771V7.02381Z" />
                            </svg>
                            Reply (02)
                          </div>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="single-comment-area">
                        <div className="author-img">
                          <img src="/assets/img/innerpage/comment-author-05.jpg" alt="" />
                        </div>
                        <div className="comment-content">
                          <div className="author-name-deg">
                            <h6>Mr. Bowmik Haldar,</h6>
                            <span>05 June, 2023</span>
                          </div>
                          <p>However, here are some well-regarded car dealerships known for their customer service, inventory, and overall reputation. It's always a good idea to research and read reviews specific...</p>
                          <div className="replay-btn">
                            <svg xmlns="http://www.w3.org/2000/svg" width={14} height={11} viewBox="0 0 14 11">
                              <path d="M8.55126 1.11188C8.52766 1.10118 8.50182 1.09676 8.47612 1.09903C8.45042 1.1013 8.42569 1.11018 8.40419 1.12486C8.3827 1.13954 8.36513 1.15954 8.35311 1.18304C8.34109 1.20653 8.335 1.23276 8.33539 1.25932V2.52797C8.33539 2.67388 8.2791 2.81381 8.17889 2.91698C8.07868 3.02016 7.94277 3.07812 7.80106 3.07812C7.08826 3.07812 5.64984 3.08362 4.27447 3.98257C3.2229 4.66916 2.14783 5.9191 1.50129 8.24735C2.59132 7.16575 3.83632 6.57929 4.92635 6.2679C5.59636 6.07737 6.28492 5.96444 6.97926 5.93121C7.26347 5.91835 7.54815 5.92129 7.83205 5.94001H7.84594L7.85129 5.94111L7.80106 6.48906L7.85449 5.94111C7.98638 5.95476 8.10864 6.01839 8.19751 6.11966C8.28638 6.22092 8.33553 6.35258 8.33539 6.48906V7.75771C8.33539 7.87654 8.45294 7.95136 8.55126 7.90515L12.8088 4.67796C12.8233 4.66692 12.8383 4.65664 12.8537 4.64715C12.8769 4.63278 12.8962 4.61245 12.9095 4.58816C12.9229 4.56386 12.9299 4.53643 12.9299 4.50851C12.9299 4.4806 12.9229 4.45316 12.9095 4.42887C12.8962 4.40458 12.8769 4.38425 12.8537 4.36988C12.8382 4.36039 12.8233 4.35011 12.8088 4.33907L8.55126 1.11188ZM7.26673 7.02381C7.19406 7.02381 7.11391 7.02711 7.02842 7.03041C6.56462 7.05242 5.92342 7.12504 5.21169 7.32859C3.79464 7.7335 2.11684 8.65116 1.00115 10.7175C0.940817 10.8291 0.844683 10.9155 0.729224 10.9621C0.613765 11.0087 0.486168 11.0124 0.368304 10.9728C0.250441 10.9331 0.149648 10.8525 0.0831985 10.7447C0.0167484 10.6369 -0.011219 10.5086 0.0040884 10.3819C0.499949 6.29981 2.01959 4.15202 3.70167 3.05391C5.03215 2.18467 6.40218 2.01743 7.26673 1.98552V1.25932C7.26663 1.03273 7.32593 0.810317 7.43839 0.615545C7.55084 0.420773 7.71227 0.260866 7.90565 0.152696C8.09902 0.0445258 8.31717 -0.00789584 8.53707 0.000962485C8.75698 0.00982081 8.97048 0.0796305 9.15506 0.203025L13.4233 3.43792C13.5998 3.55133 13.7453 3.7091 13.8462 3.8964C13.9471 4.08369 14 4.29434 14 4.50851C14 4.72269 13.9471 4.93333 13.8462 5.12063C13.7453 5.30792 13.5998 5.4657 13.4233 5.57911L9.15506 8.814C8.97048 8.9374 8.75698 9.00721 8.53707 9.01607C8.31717 9.02492 8.09902 8.9725 7.90565 8.86433C7.71227 8.75616 7.55084 8.59626 7.43839 8.40148C7.32593 8.20671 7.26663 7.9843 7.26673 7.75771V7.02381Z" />
                            </svg>
                            Reply (02)
                          </div>
                        </div>
                      </div>
                    </li>
                  </ul>
                  <div className="inquiry-form mt-100">
                    <div className="title">
                      <h4>Leave Your Comment:</h4>
                    </div>
                    <form>
                      <div className="row">
                        <div className="col-md-6">
                          <div className="form-inner mb-30">
                            <label>Your Name* :</label>
                            <input type="text" placeholder="Jackson Mile" />
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-inner mb-30">
                            <label>Your Email* :</label>
                            <input type="email" placeholder="example@gamil.com" />
                          </div>
                        </div>
                        <div className="col-md-12 mb-30">
                          <div className="form-check">
                            <input className="form-check-input" type="checkbox" defaultValue id="contactCheck" />
                            <label className="form-check-label" htmlFor="contactCheck">
                              Please save my name, email address for the next time I comment.  
                            </label>
                          </div>
                        </div>
                        <div className="col-md-12">
                          <div className="form-inner mb-50">
                            <label>Your Message :</label>
                            <textarea placeholder="Write Something..." defaultValue={""} />
                          </div>
                        </div>
                      </div>
                      <div className="form-inner">
                        <button className="primary-btn1 btn-hover" type="submit">
                          Post Comment
                          <span />
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="sidebar-area">
                <div className="single-widget mb-30">
                  <h5 className="widget-title">Search Here</h5>
                  <form>
                    <div className="search-box">
                      <input type="text" placeholder="Search Here" />
                      <button type="submit"><i className="bx bx-search" /></button>
                    </div>
                  </form>
                </div>
                <div className="single-widget mb-30">
                  <h5 className="widget-title">Categories</h5>
                  <ul className="category-list">
                    <li>
                      <Link href="/blog/blog-sidebar">Cultural Exploration
                        <span>(20)</span>
                      </Link>  
                    </li>
                    <li>
                      <Link href="/blog/blog-sidebar">Adventure Safari
                        <span>(35)</span>
                      </Link>
                    </li>
                    <li>
                      <Link href="/blog/blog-sidebar">Nature Excursion
                        <span>(25)</span>
                      </Link>
                    </li>
                    <li>
                      <Link href="/blog/blog-sidebar">Cruise Voyage
                        <span>(18)</span>
                      </Link>
                    </li>
                    <li>
                      <Link href="/blog/blog-sidebar">City Discovery
                        <span>(06)</span>
                      </Link>
                    </li>
                    <li>
                      <Link href="/blog/blog-sidebar">Educational Journey
                        <span>(08)</span>
                      </Link>
                    </li>
                    <li>
                      <Link href="/blog/blog-sidebar">Luxury Retreat
                        <span>(15)</span>
                      </Link>
                    </li>
                    <li>
                      <Link href="/blog/blog-sidebar">Photography Expedition
                        <span>(25)</span>
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="single-widget mb-30">
                  <h5 className="widget-title">Recent Post</h5>
                  <div className="recent-post-widget mb-20">
                    <div className="recent-post-img">
                      <Link href="/blog/blog-details"><img src="/assets/img/innerpage/recent-post-img1.png" alt="" /></Link>
                    </div>
                    <div className="recent-post-content">
                      <Link href="/blog">20 July, 2023</Link>
                      <h6><Link href="/blog/blog-details">Poutsicle Hydrating Lipo Stain offering.</Link></h6>
                    </div>
                  </div>
                  <div className="recent-post-widget mb-20">
                    <div className="recent-post-img">
                      <Link href="/blog/blog-details"><img src="/assets/img/innerpage/recent-post-img2.png" alt="" /></Link>
                    </div>
                    <div className="recent-post-content">
                      <Link href="/blog">12 July, 2023</Link>
                      <h6><Link href="/blog/blog-details">rutrum vitae augue idel euismod pulvi.</Link></h6>
                    </div>
                  </div>
                  <div className="recent-post-widget mb-20">
                    <div className="recent-post-img">
                      <Link href="/blog/blog-details"><img src="/assets/img/innerpage/recent-post-img3.png" alt="" /></Link>
                    </div>
                    <div className="recent-post-content">
                      <Link href="/blog">04 July, 2023</Link>
                      <h6><Link href="/blog/blog-details">Donec blandit fermentu diam non.</Link></h6>
                    </div>
                  </div>
                </div>
                <div className="single-widget">
                  <h5 className="widget-title">Tags</h5>
                  <ul className="tag-list">
                    <li>
                      <Link href="/blog">Adventure</Link>
                    </li>
                    <li>
                      <Link href="/blog">City Tour</Link>
                    </li>
                    <li>
                      <Link href="/blog">Road Trip </Link>
                    </li>
                    <li>
                      <Link href="/blog">Tourism</Link>
                    </li>
                    <li>
                      <Link href="/blog">Wildlife </Link>
                    </li>
                    <li>
                      <Link href="/blog">Nature Excursion</Link>
                    </li>
                    <li>
                      <Link href="/blog">Photography</Link>
                    </li>
                    <li>
                      <Link href="/blog">Cruise</Link>
                    </li>
                    <li>
                      <Link href="/blog">Cultural</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Newslatter />
      <Footer />
    </>
  )
}

export default page
