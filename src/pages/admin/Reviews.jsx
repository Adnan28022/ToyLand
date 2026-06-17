import React, { useState } from 'react';
import Breadcrumbs from '../../components/admin/BreadCrumbs';
import ReviewStats from '../../components/admin/reviews/ReviewStats';
import ReviewList from '../../components/admin/reviews/ReviewList';
import ReplyModal from '../../components/admin/reviews/ReplyModal';
import { Search, Filter } from 'lucide-react';

const demoReviews = [
    { id: 1, user: "Ali Khan", product: "RC Super Car", rating: 5, comment: "Bacho ko bohat pasand aya! Quality boht zabardast hai.", date: "24 Oct 2023", status: "Published" },
    { id: 2, user: "Sara Ahmed", product: "Barbie Set", rating: 4, comment: "Dolls achi hain par packing thori behtar ho sakti thi.", date: "22 Oct 2023", status: "Pending" },
    { id: 3, user: "John Doe", product: "Lego Castle", rating: 5, comment: "Excellent building blocks. Original quality.", date: "20 Oct 2023", status: "Published" },
];

const AdminReviews = () => {
    const [selectedReview, setSelectedReview] = useState(null);

    return (
        <div className="max-w-[1600px] mx-auto pb-10 px-4">
            <Breadcrumbs items={[{ label: 'Store', path: '/admin/reviews' }, { label: 'Customer Feedback' }]} />

            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
                <div>
                    <h1 className="text-3xl font-black text-slate-800 tracking-tight">Reviews & Ratings</h1>
                    <p className="text-slate-400 text-sm font-medium mt-1">Manage and respond to what customers say about your toys.</p>
                </div>
                <div className="flex gap-3 w-full md:w-auto">
                    <div className="relative flex-1 md:flex-none group">
                        <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-purple-500" size={18} />
                        <input type="text" placeholder="Search reviews..." className="bg-white border border-slate-100 rounded-2xl py-3 px-12 text-sm outline-none w-full md:w-64 focus:ring-4 focus:ring-purple-50 focus:border-purple-200 transition-all shadow-sm" />
                    </div>
                    <button className="p-3 bg-white border border-slate-100 text-slate-400 rounded-2xl hover:text-purple-600 transition-all shadow-sm"><Filter size={20} /></button>
                </div>
            </div>

            <ReviewStats />
            <ReviewList
                reviews={demoReviews}
                onReply={(rev) => setSelectedReview(rev)}
                onDelete={(id) => console.log("Delete", id)}
            />

            <ReplyModal review={selectedReview} onClose={() => setSelectedReview(null)} />
        </div>
    );
};

export default AdminReviews;