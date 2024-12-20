import React from "react";
import Segment1 from "./Compponent/AboutComp/Segment1";
import SegmentTujuan from "./Compponent/AboutComp/SegmentTujuan";
import Segment2 from "./Compponent/AboutComp/Segment2";
import Segment3 from "./Compponent/Tentang/segment3";
import Footer from "./Compponent/Footer";

const Tentang = () => {
    return (
        <div className="overflow-hidden">
            <Segment1 />
            <SegmentTujuan/>
            <Segment2 />
            <Segment3 />
            <Footer/>
        </div>
    )
};

export default Tentang;