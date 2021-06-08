import React,{useEffect,useState} from 'react';
import axios from 'axios';
import {Helmet} from "react-helmet"
import "./home.css"
import { TabContent, TabPane, Nav, NavItem, NavLink} from 'reactstrap';
import classnames from 'classnames';

const Home=(props)=>{
    const apiCall=true
    const [topCategories,setTopCategories]=useState([]);
    const [topSkills,setTopSkills]=useState([]);
    const [topCompanies,setTopCompanies]=useState([]);
    const [topIndustries,setTopIndustries]=useState([]);
     const [activeTab, setActiveTab] = useState('1');
     const [searchCategory,setSearchCategory]=useState("");
    const [fixedNav,setFixedNav]=useState(false);

  const toggle = tab => {
    if(activeTab !== tab) 
    {setActiveTab(tab)
        setSearchCategory("");
    };
  }
  const handleSearchCategory=(e)=>
  {
    setSearchCategory(e.target.value);
  }
  useEffect(()=>{
      axios.get("https://api.jobxprss.com/api/job/top-categories").then(res=>{
        setTopCategories(res.data)
      }).catch(err=>{
          console.log(err)
      })
  }
  ,[apiCall])
  useEffect(()=>{
    axios.get("https://api.jobxprss.com/api/job/top-skills").then(res=>{
      setTopSkills(res.data)
    }).catch(err=>{
        console.log(err)
    })
}
,[apiCall])
useEffect(()=>{
    axios.get("https://api.jobxprss.com/api/job/top-companies").then(res=>{
      setTopCompanies(res.data)
    }).catch(err=>{
        console.log(err)
    })
}
,[apiCall])
useEffect(()=>{
    axios.get("https://api.jobxprss.com/api/job/top-industries").then(res=>{
      setTopIndustries(res.data)
    }).catch(err=>{
        console.log(err)
    })
}
,[apiCall])



    return(
        <div>

        

<Helmet>
    {/* <title>{`Default Title${ subtitle ? ': '+subtitle : '' }`}</title> */}
    <script data-ad-client="ca-pub-1742745065087552" async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
    <meta charset="utf-8"/>
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"/>
    <meta name="_csrf_header" content="X-CSRF-TOKEN"/>
    <meta name="X-CSRF-TOKEN" content="44f02902-3ac0-4d5a-86e2-da3d17430c26"/>
    
    <meta property="og:title" content="JobXprss: All the Great Jobs in One Place!"/>
    <meta property="og:image" content="https://d1fagfwe7y4ow4.cloudfront.net/images/fetch_feature_image.png"/>
    
    <meta property="og:image:width" content="1200" />
    <meta property="og:image:height" content="630" />
    <link rel="stylesheet" href="https://d1fagfwe7y4ow4.cloudfront.net/assets/css/bootstrap.min.css" />
    <link rel="stylesheet" href="https://d1fagfwe7y4ow4.cloudfront.net/assets/css/toastr.min.css" />
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.1/css/all.min.css"/>
    <link rel="stylesheet" href="https://d1fagfwe7y4ow4.cloudfront.net/assets/css/themify-icons.css" />
    <link rel="stylesheet" href="https://d1fagfwe7y4ow4.cloudfront.net/assets/css/et-line.css" />
    <link rel="stylesheet" href="https://d1fagfwe7y4ow4.cloudfront.net/assets/css/bootstrap-select.min.css" />
    <link rel="stylesheet" href="https://d1fagfwe7y4ow4.cloudfront.net/css/bootstrap-tagsinput.css" />
    <link rel="stylesheet" href="https://d1fagfwe7y4ow4.cloudfront.net/assets/css/plyr.css" />
    <link rel="stylesheet" href="https://d1fagfwe7y4ow4.cloudfront.net/assets/css/flag.css" />
    <link rel="stylesheet" href="https://d1fagfwe7y4ow4.cloudfront.net/assets/css/slick.css" />
    <link rel="stylesheet" href="https://d1fagfwe7y4ow4.cloudfront.net/assets/css/owl.carousel.min.css" />
    <link rel="stylesheet" href="https://d1fagfwe7y4ow4.cloudfront.net/assets/css/jquery.nstSlider.min.css" />
    <link href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap-datepicker/1.7.1/css/bootstrap-datepicker.min.css" rel="stylesheet"/>
    <link rel="stylesheet" href="https://d1fagfwe7y4ow4.cloudfront.net/assets/css/jquery-ui.min.css"/>
    <link rel="stylesheet" type="text/css" href="https://d1fagfwe7y4ow4.cloudfront.net/css/select2.min.css" />
    <link rel="stylesheet" type="text/css" href="https://d1fagfwe7y4ow4.cloudfront.net/css/cropper.min.css" />
    <link rel="stylesheet" type="text/css" href="https://d1fagfwe7y4ow4.cloudfront.net/css/main.css" />
    <link rel="stylesheet" type="text/css" href="https://d1fagfwe7y4ow4.cloudfront.net/css/common.css" />
    <link rel="stylesheet" type="text/css" href="https://d1fagfwe7y4ow4.cloudfront.net/css/yellow.css" />
    <link rel="stylesheet" type="text/css" href="https://d1fagfwe7y4ow4.cloudfront.net/css/adj-font-style.css" />
    <link rel="stylesheet" type="text/css" href="https://d1fagfwe7y4ow4.cloudfront.net/css/adj-responsiveness.css" />
    <link rel="stylesheet" type="text/css" href="https://d1fagfwe7y4ow4.cloudfront.net/dashboard/css/dashboard.css"/>
    <link rel="stylesheet" type="text/css" href="https://fonts.googleapis.com/css?family=Raleway" />
    <link rel="stylesheet" type="text/css" href="https://fonts.googleapis.com/css?family=Poppins" />

    <link rel="icon" href="https://d1fagfwe7y4ow4.cloudfront.net/images/favicon.png"/>
    <link rel="apple-touch-icon" href="https://d1fagfwe7y4ow4.cloudfront.net/images/favicon-57.png"/>
    <link rel="apple-touch-icon" sizes="72x72" href="https://d1fagfwe7y4ow4.cloudfront.net/images/favicon-72.png"/>
    <link rel="apple-touch-icon" sizes="114x114" href="https://d1fagfwe7y4ow4.cloudfront.net/images/favicon-114.png"/>
    <img height="1" width="1" src="https://www.facebook.com/tr?id=1066313170498816&ev=PageView&noscript=1"/>

</Helmet>

    <div className="alert bg-yellow app-use-alert" style={{display: "none","margin-top": "50px"}}>
            <p className="text-center">To get the best JobXprss experience, use the mobile app.
                <button className="btn btn-yellow" id="download-app">Download</button>
            </p>
    </div>
    

    
    <nav className="main-nav navbar fixed-top navbar-light bg-white py-2 pr-2" style={{display:"none"}}>
        <div className="col">
            <a className="navbar-brand" href="https://jobxprss.com/index.html">
                <img src="https://d1fagfwe7y4ow4.cloudfront.net/images/logo_black.png" className="img-fluid logo" alt=""/>
            </a>
        </div>
        
    
        <div className="col-auto px-0 mx-1">
            <div className="nav-item dropdown-sign-in sticky-signin">
                <button className="dropdown-sign-in-btn sty-button">Sign In <i className="fa fa-caret-down"></i></button>
                <div className="dropdown-sign-in-content sty-content">
                        <a id="sign-in" href="https://jobxprss.com/professional/sign-in.html">As Professional</a>
                        <a id="company_sign" href="https://jobxprss.com/company/sign-in.html">As Company</a>
                </div>
            </div>
            <a className="btn btn-yellow" href="https://jobxprss.com/professional/signup/index.html">Sign Up</a>
        </div>
        <div className="col-auto px-0 mx-1">
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
                <span className="fa fa-bars"></span>
            </button>
            <div className="collapse navbar-collapse top-links" id="collapsibleNavbar" style={{top: "113% !important"}}>
                <ul className="navbar-nav">
                    <li className="nav-item"><a className="nav-link" href="https://jobxprss.com/jobs/index.html" >Jobs</a></li>
                    <li className="nav-item"><a className="nav-link" href="https://jobxprss.com/career-advice.html">Career Advice</a></li>
                    <li className="nav-item"><a className="nav-link" href="https://jobxprss.com/about-us.html">About Us</a></li>
                    <li className="nav-item"><a className="nav-link" href="https://jobxprss.com/contact-us.html">Contact Us</a></li>
                </ul>
            </div>
        </div>
    </nav>
    
    <div className="sticky-top"> 
    <div className="bg-yellow pt-1 d-none d-md-block">
        <div className="container">
            <div className="row">
                <div className="nav col">
                    <a href="https://jobxprss.com/cdn-cgi/l/email-protection.html#e19684838c8092958493a18499808c918d84cf828e8c" className="nav-link admin-email"><span className="fas fa-envelope text-dark mr-1"></span> info@jobxprss.com</a>
                    <a href="tel:+01953306969" className="nav-link phone-number"><span className="fas fa-phone-alt text-dark mr-1"></span> 01609500001</a>
                </div>
                <div className="nav col-auto pull-right">
                    <a className="nav-link facebook-url" style={{display: "none"}} target="_blank"><span className="fab fa-facebook-square"></span></a>
                    <a className="nav-link linkedin-url" style={{display: "none"}} target="_blank"><span className="fab fa-linkedin"></span></a>
                    <a className="nav-link twitter-url" style={{display: "none"}} target="_blank"><span className="fab fa-twitter-square"></span></a>
                </div>
            </div>
        </div>
    </div>
    </div>

    <div className="container my-4 d-none d-md-block">
        <div className="row">
            <div className="col">
                <a href="https://jobxprss.com/index.html">
                    <img src="https://d1fagfwe7y4ow4.cloudfront.net/images/logo.png" className="img-fluid logo" alt=""/>
                </a>
            </div>
            <div className="col-auto">
                <ul className="nav top-links">
                    
                        <li className="nav-item active"><a className="nav-link" href="https://jobxprss.com/index.html#">Home</a></li>
                    
                    <li className="nav-item"><a className="nav-link" href="https://jobxprss.com/jobs/index.html" >Jobs</a></li>
                    <li className="nav-item"><a className="nav-link" href="https://jobxprss.com/career-advice.html">Career Advice</a></li>
                    <li className="nav-item"><a className="nav-link" href="https://jobxprss.com/about-us.html">About Us</a></li>
                    <li className="nav-item"><a className="nav-link" href="https://jobxprss.com/contact-us.html">Contact Us</a></li>
                    <div className="nav-item dropdown-sign-in">
                        <button className="dropdown-sign-in-btn">Sign In
                            <i className="fa fa-caret-down"></i>
                        </button>
                        <div className="dropdown-sign-in-content">
                                <a id="sign-in" href="https://jobxprss.com/professional/sign-in.html">As Professional</a>
                                <a id="company_sign" href="https://jobxprss.com/company/sign-in.html">As Company</a>
                        </div>
                    </div>
                    <li className="nav-item login-popup" id="register"><a className="nav-link" href="https://jobxprss.com/professional/signup/index.html">Sign Up</a></li>
                </ul>
            </div>
        </div>
    </div>
    <div className="banner banner-height banner-4 banner-4-bg">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="banner-content">
                        <h1>All the Great Jobs in One Place!</h1>
        
                        
                        <div className="banner-search">
                            <form action="https://jobxprss.com/index.html" id="search-form" className="search-form" method="" novalidate="novalidate" autocomplete="off"><input type="hidden" name="csrfmiddlewaretoken" value="fPn2UFF9jSOMJKUerx3nwW7Qm7H15apiW8kOvHX7ikVOarc1YcOd1qFW0lMvUngN"/>
                                <div className="input-group">
                                <input className="form-control" type="text" name="keyword" id="keyword" placeholder="Enter Keywords"/>
                                <span className="input-group-btn">
                                <button className="button jxhome-search-btn primary-bg search-btn"><i className="fas fa-search text-dark" style={{color:"#ffffff"}}></i><span>Search</span></button>
                                </span>
                                </div>
                                <div className="error-msg-location " style={{"text-align": "left", display: "none"}}><span className="noti-arrow-search"></span></div>
                            </form>
                            <div className="trending-key">
                                <div id="trend-keywords"><b>Trending Keywords:</b></div>
                            </div>
                        </div>
                
                        <div className="row fact-items">
                            <div className="col-md-3 col-sm-6">
                                <div className="row">
                                    <div className="col-4 col-jx-12 d-flex align-items-center justify-content-center icon-bg-c">
                                        <img className="ico-fct" src="https://d1fagfwe7y4ow4.cloudfront.net/images/icons/fi-rr-briefcase.svg" alt=""/>
                                    </div>
                                    <div className="col-8 col-jx-12 p-remove fact-cont-wrap">
                                        <span className="fact-name">Open Jobs</span>
                                        <h3 className="fact-number open-job-timer" id="job_counts" style={{display: "none"}}><span className="count" data-form="" data-to=""></span></h3>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-3 col-sm-6">
                                <div className="row">
                                    <div className="col-4 col-jx-12 d-flex align-items-center justify-content-center icon-bg-c">
                                        <img className="ico-fct" src="https://d1fagfwe7y4ow4.cloudfront.net/images/icons/fi-rr-user.svg" alt=""/>
                                    </div>
                                    <div className="col-8 col-jx-12 p-remove fact-cont-wrap">
                                        <span className="fact-name">Vacancies</span>
                                        <h3 className="fact-number vacancy-timer" id="vacancy_count" style={{display: "none"}}><span className="count" data-form="" data-to=""></span></h3>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-3 col-sm-6">
                                <div className="row">
                                    <div className="col-4 col-jx-12 d-flex align-items-center justify-content-center icon-bg-c">
                                        <img className="ico-fct" src="https://d1fagfwe7y4ow4.cloudfront.net/images/icons/fi-rr-diploma.svg" alt=""/>
                                    </div>
                                    <div className="col-8 col-jx-12 p-remove fact-cont-wrap">
                                        <span className="fact-name">Skills</span>
                                        <h3 className="fact-number skill-timer" id="skill_count" style={{display: "none"}}><span className="count" data-form="" data-to=""></span></h3>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-3 col-sm-6">
                                <div className="row">
                                    <div className="col-4 col-jx-12 d-flex align-items-center justify-content-center icon-bg-c">
                                        <img className="ico-fct" src="https://d1fagfwe7y4ow4.cloudfront.net/images/icons/fi-rr-building.svg" alt=""/>
                                    </div>
                                    <div className="col-8 col-jx-12 p-remove fact-cont-wrap">
                                        <span className="fact-name">Companies</span>
                                        <h3 className="fact-number company-timer" id="companies_count" style={{display: "none"}}><span className="count"></span></h3>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    </div>
   

    <div className="explore-job-wrapper">
        <div className="container categories-list">
            <div className="row">
                <div className="col-xl-8 col-lg-12 col-md-12">
                    {/* <ul id="job-cat-list" className="nav cate-tab nav-tabs" role="tablist" id="myTab">
                        <li className="nav-item"><a className="nav-link active" id="jxcategories-tab" data-toggle="tab" href="https://jobxprss.com/index.html#jxcategories" role="tab" aria-controls="jxcategories" aria-selected="true">
                            <img src="https://d1fagfwe7y4ow4.cloudfront.net/images/icons/category.svg" style={{"padding-right": "10px"}} alt=""/>CATEGORIES</a></li>
                        <li className="nav-item"><a className="nav-link" id="jxskills-tab" data-toggle="tab" href="https://jobxprss.com/index.html#jxskills" role="tab" aria-controls="jxskills" aria-selected="true">
                            <img src="https://d1fagfwe7y4ow4.cloudfront.net/images/icons/pencil.svg" style={{"padding-right": "10px"}} alt=""/> SKILLS</a></li>
                        <li className="nav-item"><a className="nav-link" id="jxcompanies-tab" data-toggle="tab" href="https://jobxprss.com/index.html#jxcompanies" role="tab" aria-controls="jxcompanies" aria-selected="true">
                            <img src="https://d1fagfwe7y4ow4.cloudfront.net/images/icons/office-building.svg" style={{"padding-right": "10px"}} alt=""/>COMPANIES</a></li>
                        <li className="nav-item"><a className="nav-link" id="jxindustries-tab" data-toggle="tab" href="https://jobxprss.com/index.html#jxindustries" role="tab" aria-controls="jxindustries" aria-selected="true">
                            <img src="https://d1fagfwe7y4ow4.cloudfront.net/images/icons/industry.svg" style={{"padding-right": "10px"}} alt=""/>INDUSTRIES</a></li>
                    </ul> */}
                    <Nav tabs id="job-cat-list" className="nav cate-tab nav-tabs" >
        <NavItem className="nav-item">
          <NavLink
            className={classnames({ active: activeTab === '1' })}
            onClick={() => { toggle('1'); }}
          >
              <img src="https://d1fagfwe7y4ow4.cloudfront.net/images/icons/category.svg" style={{"padding-right": "10px"}} alt=""/>CATEGORIES
            
          </NavLink>
        </NavItem>
        <NavItem className="nav-item">
          <NavLink
            className={classnames({ active: activeTab === '2' })}
            onClick={() => { toggle('2'); }}
          >
            <img src="https://d1fagfwe7y4ow4.cloudfront.net/images/icons/pencil.svg" style={{"padding-right": "10px"}} alt=""/> SKILLS
          </NavLink>
        </NavItem>
        <NavItem className="nav-item">
          <NavLink
            className={classnames({ active: activeTab === '3' })}
            onClick={() => { toggle('3'); }}
          >
            <img src="https://d1fagfwe7y4ow4.cloudfront.net/images/icons/office-building.svg" style={{"padding-right": "10px"}} alt=""/>COMPANIES
          </NavLink>
        </NavItem>
      <NavItem className="nav-item">
      <NavLink
        className={classnames({ active: activeTab === '4' })}
        onClick={() => { toggle('4'); }}
      >
        <img src="https://d1fagfwe7y4ow4.cloudfront.net/images/icons/industry.svg" style={{"padding-right": "10px"}} alt=""/>INDUSTRIES
      </NavLink>
    </NavItem>
      </Nav>

                    
                    <div className="tab-content y-border" id="myTabContent">
                    <TabContent activeTab={activeTab}>
                    
                        {/* <div id="jxcategories" className="container tab-pane active" role="tabpanel" aria-labelledby="jxcategories-tab"> */}
                        <TabPane tabId="1" id="jxcategories" class="container tab-pane active">
                            <div className="jx-tab-job-sort input-group d-flex align-items-center justify-content-center">
                                 <input type="text" name="category" id="search-categories" placeholder="Search Job category" className="job-cat-search-b-y"  onChange={handleSearchCategory} />
                            </div>
                            <div className="row no-gutter px-3">
                                <div className="col-md-12">
                                    <ul id="category-list">
                                    {topCategories.filter(jobcategory => (jobcategory["name"].toLowerCase()).includes(searchCategory.toLowerCase())).map(category=><div key={category.name}> <li>
                                        <a title={category.name} class="list-group-item padding-border-l-r justify-content-between align-items-center"
                                         data-category={category.name} 
                                         href={`https://jobxprss.com/jobs?category=${category.name}`}>
                                             {category.name}
                                             <span class="badge badge-primary badge-primary-c badge-pill">
                                                 {category.num_posts}</span></a></li></div>)}
   
                                    </ul>
                                </div>
                            </div>
                        </TabPane>
                        {/* </div> */}

                    
                        {/* <div id="jxskills" className="container tab-pane" role="tabpanel" aria-labelledby="jxskills-tab"> */}
                        <TabPane tabId="2" id="jxskills" className="container tab-pane">
                            <div className="jx-tab-job-sort input-group d-flex align-items-center justify-content-center">
                                <input type="text" name="skill" id="search-skills" placeholder="Search Skills" className="job-cat-search-b-y"  onChange={handleSearchCategory}/>
                            </div>
                            <div className="row no-gutter px-3">
                                <div className="col-md-12">
                                    <ul id="skill-list">
                                                 {topSkills.filter(jobcategory => (jobcategory["name"].toLowerCase()).includes(searchCategory.toLowerCase())).map(category=><div key={category.name}> <li>
                                        <a title={category.name} class="list-group-item padding-border-l-r justify-content-between align-items-center"
                                         data-category={category.name} 
                                         href={`https://jobxprss.com/jobs?skill=${category.name}`}>
                                             {category.name}
                                             <span class="badge badge-primary badge-primary-c badge-pill">
                                                 {category.skills_count}</span></a></li></div>)}
                                                 
                                                 
                                    </ul>
                                </div>
                            </div>
                            </TabPane>
                        {/* </div> */}

                       
                        {/* <div id="jxcompanies" className="container tab-pane" role="tabpanel" aria-labelledby="jxcompanies-tab"> */}
                        <TabPane tabId="3" id="jxcompanies" className="container tab-pane">
                            <div className="jx-tab-job-sort input-group d-flex align-items-center justify-content-center">
                                 <input type="text" name="company" id="search-companies" placeholder="Search Companies" className="job-cat-search-b-y"  onChange={handleSearchCategory} />
                            </div>
                            <div className="row no-gutter px-3">
                                <div className="col-md-12">
                                    <ul id="company-list">
                                        {topCompanies.filter(jobcategory => (jobcategory["name"].toLowerCase()).includes(searchCategory.toLowerCase())).map(category=><div key={category.name}> <li>
                                        <a title={category.name} class="list-group-item padding-border-l-r justify-content-between align-items-center"
                                         data-category={category.name} 
                                         href={`https://jobxprss.com/company-details/${category.name}`}>
                                             {category.name}
                                             <span class="badge badge-primary badge-primary-c badge-pill">
                                                 {category.num_posts}</span></a></li></div>)}
                                    </ul>
                                </div>
                            </div>
                            </TabPane>
                        {/* </div> */}

        
                        {/* <div id="jxindustries" className="container tab-pane" role="tabpanel" aria-labelledby="jxindustries-tab"> */}
                        <TabPane tabId="4" id="jxindustries" className="container tab-pane">
                            <div className="jx-tab-job-sort input-group d-flex align-items-center justify-content-center">
                                 <input type="text" name="industry" id="search-industries" placeholder="Search Industries" className="job-cat-search-b-y"  onChange={handleSearchCategory}/>
                            </div>
                            <div className="row no-gutter px-3">
                                <div className="col-md-12">
                                    <ul id="industry-list">
                                        {topIndustries.filter(jobcategory => (jobcategory["name"].toLowerCase()).includes(searchCategory.toLowerCase())).map(category=><div key={category.name}> <li>
                                        <a title={category.name} class="list-group-item padding-border-l-r justify-content-between align-items-center"
                                         data-category={category.name} 
                                         href={`https://jobxprss.com/company-details/${category.name}`}>
                                             {category.name}
                                             <span class="badge badge-primary badge-primary-c badge-pill">
                                                 {category.num_posts}</span></a></li></div>)}
                                    
                                    </ul>
                                </div>
                            </div>
                        {/* </div> */}
                        </TabPane>
                        </TabContent>
                    </div>
                </div>
            
                {/* <div className="col-xl-4 col-lg-12 col-md-12 jx-advertisements-wrap">
                    <ul className="jx-advertisements">
                        <li className="jx-advert-wrap">
                            <img className="img-fluid" src="https://d1fagfwe7y4ow4.cloudfront.net/images/advertisement/ad-200x145-s.png" alt=""/>
                        </li>
                        <li className="jx-advert-wrap">
                            <img className="img-fluid" src="https://d1fagfwe7y4ow4.cloudfront.net/images/advertisement/ad-320x145-m.png" alt=""/>
                        </li>
                        <li className="jx-advert-wrap">
                            <img className="img-fluid" src="https://d1fagfwe7y4ow4.cloudfront.net/images/advertisement/ad-535x140-l.png" alt=""/>
                        </li>
                        <li className="jx-advert-wrap">
                            <img className="img-fluid" src="https://d1fagfwe7y4ow4.cloudfront.net/images/advertisement/ad-170x135-xs.png" alt=""/>
                        </li>
                        <li className="jx-advert-wrap">
                            <img className="img-fluid" src="https://d1fagfwe7y4ow4.cloudfront.net/images/advertisement/ad-170x135-xs_fi.png" alt=""/>
                        </li>
                        <li className="jx-advert-wrap">
                            <img className="img-fluid" src="https://d1fagfwe7y4ow4.cloudfront.net/images/advertisement/ad-170x135-xs_fj.png" alt=""/>
                        </li>
                        <li className="jx-advert-wrap">
                            <img className="img-fluid" src="https://d1fagfwe7y4ow4.cloudfront.net/images/advertisement/ad-200x145-s.png" alt=""/>
                        </li>
                        <li className="jx-advert-wrap">
                            <img className="img-fluid" src="https://d1fagfwe7y4ow4.cloudfront.net/images/advertisement/ad-320x145-m.png" alt=""/>
                        </li>
                    </ul>
                </div>  */}
{/*                
                <div className="col-xl-4 col-lg-12 col-md-12">


                    <div id="jxAdvertSlide" className="carousel slide jx-home-ads-slide" data-ride="carousel">
                        <ol id="slider-serial" className="carousel-indicators">
                        </ol>
                        <div id="slider-advert" className="carousel-inner">
                            <div className="carousel-item active">
                                <img className="d-block w-100" src="/static/images/home-ads-slider/jx-slider-1.jpg" alt="First slide"/>
                           </div>
                        </div>
                    </div>
                </div> */}
           
            </div>
        </div>
    </div>

                
    <div className="recent-job ash-background">
        <div className="container">
            <div className="section-header section-header-2">
                <h2 className="text-center mb-5">Featured Jobs</h2>
                <span className="m-auto recent-bottom-border">&nbsp;</span>
            </div>
            <div className="row" id="jobs">
                <div className="col" id="job-list">
                    <div className="apply-popup">
                        <div className="modal fade" id="apply-popup-id" tabindex="-1" role="dialog" aria-hidden="true">
                            <div className="modal-dialog" role="document">
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <h5 className="modal-title"><i data-feather="edit"></i>APPLY</h5>
                                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                            <span aria-hidden="true">&times;</span>
                                        </button>
                                    </div>
                                    <div className="modal-body">
                                        <h5 id="job-title"></h5>
                                        <form action="https://jobxprss.com/index.html#" id="apply-form" novalidate="novalidate">

                                            <div className="form-group apply-name display-none">
                                                <input type="text" name="full_name" id="name" placeholder="Name" className="form-control" required/>
                                            </div>
                                            <div className="form-group apply-phone display-none">
                                                <input type="text" regex="\+?(88)?0?1[56789][0-9]{8}\b" name="phone" id="phone" placeholder="Mobile" className="form-control" data-msg-regex="Enter a valid Mobile Number" required/>
                                            </div>
                                            <div className="form-group apply-email display-none">
                                                <input type="email" name="email" id="email" regex='^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$' placeholder="Email" className="form-control" data-msg-regex="Please enter a valid email" required/>
                                                <input type="hidden" name="job" id="job" className="form-control"/>
                                                <input type="hidden" name="password" id="password" className="form-control"/>
                                                <input type="hidden" name="terms_and_condition_status" id="terms_and_condition_status" className="form-control"/>
                                            </div>
                                                                   <div className="form-group">
                                                                            <textarea className="form-control" placeholder="Message"></textarea>
                                                                        </div>
                                            <div className="form-group file-input-wrap">
                                                <label for="up-cv">
                                                    <input id="up-cv" name="attachment" type="file" accept=".pdf,.doc,.docx,.zip"/>
                                                    <i id="icon-change" data-feather="upload-cloud"></i>
                                                    <span id="fileName">Attach your file <span>(pdf,zip,doc,docx)</span></span>
                                                </label>
                                                <textarea name="application_notes" id="application_notes" className="tinymce-editor tinymce-editor-1" placeholder="Application note here"></textarea>
                                            </div>
                                            <button id="apply_now" className="button btn-yellow btn-block">Apply Now</button>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="text-center browse-all-padding">
                <a href="https://jobxprss.com/featured-jobs/index.html" className="button btn-yellow d-inline-block browse-all-btn">Browse All</a>
            </div>
        </div>
    </div>

    <div className="top-companies-wrapper" >
        <div className="container" id="featured-companies">
            <div className="row">
                <div className="col">
                    <div className="section-header">
                        <h2 className="mb-5">Featured Companies</h2>
                        <span className="m-auto recent-bottom-border">&nbsp;</span>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div className="padding-bottom-90 career-advice-wrapper ash-background">
        <div className="container">
            <div className="row">
                <div className="col">
                    <div className="section-header">
                        <h2 className="mb-4">Career Advice</h2>
                        <span className="m-auto recent-bottom-border">&nbsp;</span>
                    </div>
                </div>
            </div>
            <div className="row" id="career-advice">

            </div>
            <div className=" browse-all-career-advise" style={{"text-align": "center","padding-top":"50px"}}>
                <a href="https://jobxprss.com/career-advice.html" className="button btn-yellow d-inline-block browse-all-btn">Browse All</a>
            </div>
        </div>
    </div>
    







<div className="jobxprss-app">
    <div className="container">
        <div className="row">
            <div className="col-md">
                <div className="app-download text-center">
                    <h2>Get JobXprss App</h2>
                    <span className="bottom-border-app-link"></span>
                    <p className="text-center">To get the best JobXprss experience, use the mobile app.<br/>Available for both Android & iOS.</p>
                    <div className="app-download-button">
                        <div className="jx-app-dl-btn-a"><a href="https://jobxprss.com/android.html" target="_blank" className="android-app">
                            <img src="https://d1fagfwe7y4ow4.cloudfront.net/images/badge-android.png" alt="Some picture"/>
                        </a></div>&nbsp;&nbsp;
                        <div className="jx-app-dl-btn-i"><a href="https://jobxprss.com/ios.html" target="_blank" className="apple-app">
                            <img src="https://d1fagfwe7y4ow4.cloudfront.net/images/badge-iphone.png" alt="Some picture"/>
                        </a></div>
                    </div>
                </div>
                <div className="send-sms-div">
                    <p className="text-center">To get the app download link to your mobile:<span className="app-lnk-num-ex"><br/>Enter your mobile number</span> (example: 01609500001)</p>
                    <form action="https://jobxprss.com/index.html" id="send-sms" className="send-sms-form form-inline" method="POST" data-callback="" autocomplete="off">
                        <div className="input-group send-sms-input mb-5">
                            <input type="text" name="mobile" id="mobile" regex="^01[13-9]\d{8}$" className="form-control" required data-msg-required="Mobile number is required" data-msg-regex="Please enter a valid number" placeholder="Enter Mobile Number" onkeyup="return trim(this)"/>
                            <div className="input-group-append">
                                <button className="btn send-sms-btn" type="submit">Send Link</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
            <div className="col-md app_image">
                <img  className="img-fluid" src="https://d1fagfwe7y4ow4.cloudfront.net/images/yellow/jobxprss_app.png"/>
            </div>
        </div>
    </div>
</div>
<footer>
    <div className="footer-top border-bottom section-padding-top padding-bottom-40">
        <div className="container">
            <div className="row">
                <div className="col-md-6">
                    <div className="footer-logo">
                        <a href="https://jobxprss.com/index.html">
                            <img src="https://d1fagfwe7y4ow4.cloudfront.net/images/logo.png" className="logo img-fluid" alt=""/>
                        </a>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="footer-social">
                        <a className="facebook-url" style={{display: "none"}} href="https://jobxprss.com/index.html#" target="_blank"><i className="fab fa-3x fa-facebook-square text-yellow"></i></a>&nbsp;
                        <a className="linkedin-url" style={{display: "none"}} href="https://jobxprss.com/index.html#" target="_blank"><i className="fab fa-3x fa-linkedin text-yellow"></i></a>&nbsp;
                        <a className="twitter-url" style={{display: "none"}} href="https://jobxprss.com/index.html#" target="_blank"><i className="fab fa-3x fa-twitter-square text-yellow"></i></a>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <hr className="border-yellow w-auto" />
    <div className="footer-widget-wrapper padding-top-80">
        <div className="container">
            <div className="row">
                <div className="col-md-3 col-sm-6">
                    <div className="footer-widget footer-shortcut-link">
                        <h4 className="text-yellow">Information</h4>
                        <div className="widget-inner">
                            <ul>
                                <li><a href="https://jobxprss.com/about-us.html">About Us</a></li>
                                <li><a href="https://jobxprss.com/contact-us.html">Contact Us</a></li>
                                <li><a href="https://jobxprss.com/privacy-policy/index.html">Privacy Policy</a></li>
                                <li><a href="https://jobxprss.com/refund-policy/index.html">Refund Policy</a></li>
                                <li><a href="https://jobxprss.com/terms-of-use/index.html">Terms of Use</a></li>
                                <li><a href="https://jobxprss.com/FAQ/index.html">FAQ</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="col-md-3 col-sm-6">
                    <div className="footer-widget footer-shortcut-link">
                        <h4 className="text-yellow">Company</h4>
                        <div className="widget-inner">
                            <ul>
                                <li id="request_for_access"><a href="https://jobxprss.com/request-for-access/index.html">Request For Access</a></li>
                                <li id="company_sign"><a href="https://jobxprss.com/company/sign-in.html">Company Sign In</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="col-md-3 col-sm-6">
                    <div className="footer-widget footer-shortcut-link">
                        <h4 className="text-yellow">Professional</h4>
                        <div className="widget-inner">
                            <ul>
                                <li><a href="https://jobxprss.com/professional/signup/index.html">Create Account</a></li>
                                <li id="professional_sign"><a href="https://jobxprss.com/professional/sign-in.html">Professional Sign In</a></li>
                                <li><a href="https://jobxprss.com/career-advice.html">Career Advice</a></li>

                            </ul>
                        </div>
                    </div>
                </div>
                <div className="col-md-3 col-sm-6">
                    <div className="footer-widget footer-shortcut-link">
                        <div className="widget-inner" style={{"pointer-events": "none"}}>
                            <h4 className="text-yellow">Address</h4>
                            <address>
                                House 76 (Level 1)
                                Road 4, Block B
                                Niketan, Gulshan 1
                                Dhaka 1212, Bangladesh
                            </address>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-12">
                    <div className="footer-widget footer-newsletter">
                        <h4 className="text-yellow">Job Alert</h4>
                        <p id="alert-msg">Get email updates about our latest news.</p>
                        <h4>Subscribe Now...</h4>
                        <form action="" id="job-alert" className="newsletter-form form-inline" method="POST" data-callback="" autocomplete="off">
                            <div className="input-group job-alert-input mb-3">
                                <input type="text" name="email" id="email" regex='^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$' className="form-control" required data-msg-required="Email is required" data-msg-regex="Please enter a valid email" placeholder="demo@email.com"/>
                                <div className="input-group-append">
                                    <button className="btn bg-yellow" type="submit"><i className="fas fa-paper-plane fa-2x text-dark"></i></button>
                                </div>
                            </div>
                            <p className="newsletter-error">0 - Please enter a value</p>
                            <p className="newsletter-success">Thank you for subscribing!</p>
                        </form>
                    </div>
                </div>
            </div>
        </div>

    </div>
    <div className="container">
        <hr className="border-yellow w-auto"/>
        <div className="row">
            <div className="col-xl-1 col-lg-2 col-md-12" style={{"padding-top": "8px"}}>
                <p className="m-0 pay-with-heading">Pay With</p>
            </div>
            <div className="col-xl-8 col-lg-7  col-md-12 text-center" style={{"padding-top": "3px"}}>
                <picture>
                    <source srcset="https://d1fagfwe7y4ow4.cloudfront.net/images/yellow/pay-with-logo-xs.png" media="(max-width: 575px)"/>
                    <img src="https://d1fagfwe7y4ow4.cloudfront.net/images/yellow/pay-with-logo.png" style={{"max-width": "100%", "text-align": "center"}}/>
                </picture>
            </div>
            <div className="col-xl-3 col-lg-3  col-md-12">
                    <div className="verify-ssl-logo">
                        <p >Verified by</p>
                        <img className="ssl-cmrs-img" src="https://d1fagfwe7y4ow4.cloudfront.net/images/yellow/ssl-commerse.png" style={{"max-width": "40%"}} />
                    </div>
            </div>
        </div>
        <hr className="border-yellow w-auto"/>
    </div>
    <div className="footer-bottom-area">
        <div className="container">
            <div className="row">
                <div className="col-md">
                    <div className="footer-bottom border-top">
                        <div className="row">
                            <div className="col-lg-3 col-md-12">
                                <p className="powered-by"><span>Powered By </span> <a className="powered-by-ishraak" target="_blank" href="http://www.ishraak.com">
                                    <img src="https://d1fagfwe7y4ow4.cloudfront.net/images/ishraak-solutions-logo.png" alt="ISHRAAK" width="80px"/>

                                </a>
                                </p>
                            </div>
                            <div className="col-lg-6 col-md-12">
                                <p className="copyright-text">Copyright © 2020 JobXprss, All Right Reserved <span className="version">v1.1.335</span></p>
                            </div>
                            <div className="col-lg-3 d-lg-block d-none">
                                <div className="back-to-top">
                                    <a href="https://jobxprss.com/index.html#">Back to top<i className="fas fa-angle-up"></i></a>
                                </div>
                            </div>
                            <div className="d-lg-none col-md-12  d-md-block">
                                <div className="back-to-top">
                                    <a href="https://jobxprss.com/index.html#"><i className="fas fa-angle-up"></i>Back to top</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</footer>


            
</div>


     
    )

}

export default Home;