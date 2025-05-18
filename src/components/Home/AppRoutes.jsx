import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
import CoursesPage from './Courses/CoursesPage';
import Contact from './Contact/Contact';
import CourseStart from './Courses/CourseStart';
import PrivacyPolicy from './TermsAndCondition/privacy';
import TermsAndConditions from './TermsAndCondition/Terms';
import AboutSquare from './WhySquare/AboutSquare';



function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/courses" element={<CoursesPage />} />
        <Route path="/pre-course" element={<CourseStart/>} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/terms" element={<TermsAndConditions />} />
        <Route path="/privacy" element={<PrivacyPolicy />} />
        <Route path="/about" element={<AboutSquare />} />
      </Routes>
    </Router>
  );
}

export default AppRoutes;
