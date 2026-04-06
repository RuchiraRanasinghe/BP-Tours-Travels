import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { BadgeCheck, MessageCircle, Send, Star, ThumbsUp } from "lucide-react";
import { useAdminData } from "@/hooks/useAdminData";

type ReviewSource = "Google" | "Play Store" | "YouTube";

type UserReview = {
  id: string;
  name: string;
  location: string;
  comment: string;
  rating: number;
  source: ReviewSource;
  createdAt: string;
};

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: index * 0.08, duration: 0.5, ease: "easeOut" as const },
  }),
};

const sourceStyles: Record<ReviewSource, string> = {
  Google: "bg-white border-blue-200 text-blue-700",
  "Play Store": "bg-green-50 border-green-200 text-green-700",
  YouTube: "bg-red-50 border-red-200 text-red-700",
};

const renderStars = (rating: number) => {
  return Array.from({ length: 5 }, (_, i) => (
    <Star
      key={i}
      className={`h-4 w-4 ${i < rating ? "fill-amber-400 text-amber-400" : "text-border"}`}
    />
  ));
};

const ReviewsSection = () => {
  const { testimonials } = useAdminData();

  const [viewerName, setViewerName] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [draftName, setDraftName] = useState("");
  const [draftLocation, setDraftLocation] = useState("Sri Lanka");
  const [draftRating, setDraftRating] = useState(5);
  const [draftComment, setDraftComment] = useState("");
  const [draftSource, setDraftSource] = useState<ReviewSource>("Google");

  const [userReviews, setUserReviews] = useState<UserReview[]>([]);

  const mappedTestimonials = useMemo(
    () =>
      testimonials.map((item, index) => ({
        id: item.id,
        name: item.customerName,
        location: item.location,
        comment: item.message,
        rating: index % 3 === 0 ? 5 : 4,
        source: (index % 3 === 0 ? "Google" : index % 3 === 1 ? "Play Store" : "YouTube") as ReviewSource,
        createdAt: "Recently",
        helpful: 24 + index * 7,
      })),
    [testimonials],
  );

  const allReviews = useMemo(() => {
    const normalizedUser = userReviews.map((item, index) => ({
      ...item,
      helpful: 3 + index,
    }));
    return [...normalizedUser, ...mappedTestimonials];
  }, [mappedTestimonials, userReviews]);

  const averageRating = useMemo(() => {
    if (!allReviews.length) return 0;
    const total = allReviews.reduce((sum, item) => sum + item.rating, 0);
    return total / allReviews.length;
  }, [allReviews]);

  const ratingCounts = useMemo(() => {
    return [5, 4, 3, 2, 1].map((star) => {
      const count = allReviews.filter((item) => item.rating === star).length;
      const width = allReviews.length ? (count / allReviews.length) * 100 : 0;
      return { star, count, width };
    });
  }, [allReviews]);

  const topReviews = useMemo(() => allReviews.slice(0, 6), [allReviews]);

  const onLogin = (event: React.FormEvent) => {
    event.preventDefault();
    if (!viewerName.trim()) return;
    setIsLoggedIn(true);
  };

  const onSubmitReview = (event: React.FormEvent) => {
    event.preventDefault();

    if (!draftName.trim() || !draftComment.trim()) return;

    const nextReview: UserReview = {
      id: `ur-${Date.now()}`,
      name: draftName.trim(),
      location: draftLocation.trim() || "Sri Lanka",
      comment: draftComment.trim(),
      rating: draftRating,
      source: draftSource,
      createdAt: "Just now",
    };

    setUserReviews((prev) => [nextReview, ...prev]);
    setDraftName(viewerName || "");
    setDraftComment("");
    setDraftRating(5);
    setDraftSource("Google");
  };

  return (
    <section id="testimonials" className="py-24 md:py-32 bg-surface-alt">
      <div className="container px-6">
        <motion.div
          className="text-center mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={fadeUp}
          custom={0}
        >
          <span className="text-sm font-semibold tracking-[0.15em] uppercase text-primary mb-3 block">Trusted Reviews</span>
          <h2 className="text-3xl md:text-5xl font-display font-bold text-foreground mb-4">Real Ratings, Real Replies</h2>
          <p className="text-muted-foreground text-lg">Build confidence with verified-style feedback, stars, and public support responses.</p>
        </motion.div>

        <div className="grid lg:grid-cols-[1.2fr_1fr] gap-6 mb-8">
          <motion.article
            className="rounded-2xl border border-border bg-card p-6 shadow-card"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            variants={fadeUp}
            custom={1}
          >
            <div className="flex flex-wrap items-end justify-between gap-4 mb-6">
              <div>
                <p className="text-sm text-muted-foreground">Overall Rating</p>
                <p className="text-4xl font-display font-bold text-foreground">{averageRating.toFixed(1)}</p>
                <div className="flex items-center gap-1 mt-1">{renderStars(Math.round(averageRating))}</div>
              </div>
              <div className="text-right">
                <p className="text-sm text-muted-foreground">Total Reviews</p>
                <p className="text-2xl font-semibold text-foreground">{allReviews.length}</p>
              </div>
            </div>

            <div className="space-y-2.5">
              {ratingCounts.map((row) => (
                <div key={row.star} className="grid grid-cols-[48px_1fr_48px] items-center gap-3">
                  <p className="text-sm text-foreground">{row.star} star</p>
                  <div className="h-2.5 rounded-full bg-muted overflow-hidden">
                    <div className="h-full bg-gradient-blue" style={{ width: `${row.width}%` }} />
                  </div>
                  <p className="text-sm text-right text-muted-foreground">{row.count}</p>
                </div>
              ))}
            </div>
          </motion.article>

          <motion.article
            className="rounded-2xl border border-border bg-card p-6 shadow-card"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            variants={fadeUp}
            custom={2}
          >
            <p className="text-sm font-semibold tracking-[0.08em] uppercase text-primary mb-4">Trust Ranks</p>
            <div className="space-y-3">
              <div className="rounded-xl border border-border bg-background p-4">
                <p className="text-sm text-muted-foreground">Service Rank</p>
                <p className="text-lg font-semibold text-foreground">Top 5% Airport Transfer in Colombo</p>
              </div>
              <div className="rounded-xl border border-border bg-background p-4">
                <p className="text-sm text-muted-foreground">Support Rank</p>
                <p className="text-lg font-semibold text-foreground">Fast Response Team - Avg. 14 min reply</p>
              </div>
              <div className="rounded-xl border border-border bg-background p-4">
                <p className="text-sm text-muted-foreground">Customer Loyalty</p>
                <p className="text-lg font-semibold text-foreground">92% riders return for repeat bookings</p>
              </div>
            </div>
          </motion.article>
        </div>

        <div className="grid xl:grid-cols-[1fr_1.6fr] gap-6">
          <motion.article
            className="rounded-2xl border border-border bg-card p-6 shadow-card h-fit"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            variants={fadeUp}
            custom={3}
          >
            <p className="text-lg font-semibold text-foreground mb-3">Logged User Review</p>
            {!isLoggedIn ? (
              <form className="space-y-3" onSubmit={onLogin}>
                <input
                  className="w-full rounded-xl border border-border bg-background px-3 py-2.5 text-sm outline-none focus:ring-2 focus:ring-primary/25"
                  placeholder="Enter your name to continue"
                  value={viewerName}
                  onChange={(event) => {
                    const value = event.target.value;
                    setViewerName(value);
                    setDraftName(value);
                  }}
                />
                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-2 rounded-full bg-gradient-blue px-4 py-2.5 text-sm font-semibold text-primary-foreground shadow-blue"
                >
                  <BadgeCheck className="h-4 w-4" />
                  Sign in to Post Review
                </button>
                <p className="text-xs text-muted-foreground">This creates a trusted review flow for logged users and improves website credibility.</p>
              </form>
            ) : (
              <form className="space-y-3" onSubmit={onSubmitReview}>
                <input
                  className="w-full rounded-xl border border-border bg-background px-3 py-2.5 text-sm outline-none focus:ring-2 focus:ring-primary/25"
                  placeholder="Display name"
                  value={draftName}
                  onChange={(event) => setDraftName(event.target.value)}
                />
                <input
                  className="w-full rounded-xl border border-border bg-background px-3 py-2.5 text-sm outline-none focus:ring-2 focus:ring-primary/25"
                  placeholder="Location"
                  value={draftLocation}
                  onChange={(event) => setDraftLocation(event.target.value)}
                />
                <div className="grid grid-cols-2 gap-3">
                  <select
                    className="rounded-xl border border-border bg-background px-3 py-2.5 text-sm outline-none focus:ring-2 focus:ring-primary/25"
                    value={draftRating}
                    onChange={(event) => setDraftRating(Number(event.target.value))}
                  >
                    <option value={5}>5 stars</option>
                    <option value={4}>4 stars</option>
                    <option value={3}>3 stars</option>
                    <option value={2}>2 stars</option>
                    <option value={1}>1 star</option>
                  </select>
                  <select
                    className="rounded-xl border border-border bg-background px-3 py-2.5 text-sm outline-none focus:ring-2 focus:ring-primary/25"
                    value={draftSource}
                    onChange={(event) => setDraftSource(event.target.value as ReviewSource)}
                  >
                    <option value="Google">Google style</option>
                    <option value="Play Store">Play Store style</option>
                    <option value="YouTube">YouTube style</option>
                  </select>
                </div>
                <textarea
                  rows={4}
                  className="w-full rounded-xl border border-border bg-background px-3 py-2.5 text-sm outline-none focus:ring-2 focus:ring-primary/25"
                  placeholder="Write your feedback"
                  value={draftComment}
                  onChange={(event) => setDraftComment(event.target.value)}
                />
                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-2 rounded-full bg-gradient-blue px-4 py-2.5 text-sm font-semibold text-primary-foreground shadow-blue"
                >
                  <Send className="h-4 w-4" />
                  Publish Review
                </button>
              </form>
            )}
          </motion.article>

          <div className="grid md:grid-cols-2 gap-4">
            {topReviews.map((item, index) => (
              <motion.article
                key={`${item.id}-${index}`}
                className="rounded-2xl border border-border bg-card p-5 shadow-card"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                variants={fadeUp}
                custom={index + 4}
              >
                <div className="flex items-start justify-between gap-3 mb-3">
                  <div>
                    <p className="font-semibold text-foreground">{item.name}</p>
                    <p className="text-xs text-muted-foreground">{item.location} • {item.createdAt}</p>
                  </div>
                  <span className={`text-xs px-2.5 py-1 rounded-full border ${sourceStyles[item.source]}`}>
                    {item.source}
                  </span>
                </div>

                <div className="flex items-center gap-1 mb-3">{renderStars(item.rating)}</div>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">{item.comment}</p>

                <div className="rounded-xl border border-border bg-background p-3 mb-3">
                  <p className="text-xs text-muted-foreground mb-1">Official reply</p>
                  <p className="text-sm text-foreground">
                    Thank you, {item.name.split(" ")[0]}! We appreciate your feedback and our team has logged your suggestion.
                  </p>
                </div>

                <div className="flex items-center justify-between text-xs text-muted-foreground">
                  <button type="button" className="inline-flex items-center gap-1.5 hover:text-primary transition-colors">
                    <ThumbsUp className="h-3.5 w-3.5" />
                    Helpful ({item.helpful})
                  </button>
                  <button type="button" className="inline-flex items-center gap-1.5 hover:text-primary transition-colors">
                    <MessageCircle className="h-3.5 w-3.5" />
                    Reply
                  </button>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;
