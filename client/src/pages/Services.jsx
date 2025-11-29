import React from "react";
import { motion } from "framer-motion";
import Banner from "../assets/ServiceBanner.png";
import { useState } from "react";

import img1 from '../assets/service5.avif'
import img2 from '../assets/service6.avif'

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const Services = () => {
  const [show1, setShow1] = useState(false);
  const [show2, setShow2] = useState(false);
  const [show3, setShow3] = useState(false);
  const [show4, setShow4] = useState(false);

  return (
    <div className="w-full font-sans">
      {/* HERO SECTION */}
      <section className="relative w-full h-[60vh] md:h-[70vh] overflow-hidden">
        <img
          loading="lazy"
          decoding="async"
          src={Banner}
          className="w-full h-full object-cover brightness-75 transform-gpu will-change-transform"
          alt="Services Banner"
        />

        <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white px-6">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-5xl md:text-6xl font-semibold"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            Services
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.7 }}
            className="text-lg md:text-xl mt-4 max-w-2xl"
          >
            Providing compassionate therapy solutions to guide you toward
            emotional wellness, growth, and clarity.
          </motion.p>
        </div>
      </section>

      {/* STEPS HEADER */}
      <section className="px-6 md:px-24 py-16 md:py-24">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div>
            <p className="text-sm text-gray-500">OUR SERVICES</p>
            <h2
              className="text-3xl md:text-4xl font-semibold mt-2"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
            >
              Clear Steps for Healing Minds
            </h2>
          </div>

          <button className="text-gray-700 text-sm border px-4 py-2 rounded-full hover:bg-gray-100">
            Our Approach →
          </button>
        </div>
      </section>

      {/* SERVICE LIST */}
      <section className="px-6 md:px-24 pb-24">
        <div className="max-w-7xl mx-auto flex flex-col gap-10">
          {/* service1 */}

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-50px" }}
            className="bg-gray-50 rounded-3xl p-6 md:p-10 shadow-sm border border-gray-200 transform-gpu will-change-transform"
          >
            <div className="grid md:grid-cols-2 gap-10 items-center">
              {/* IMAGE */}
              <img
                loading="lazy"
                decoding="async"
                src="https://images.pexels.com/photos/4098211/pexels-photo-4098211.jpeg"
                alt="Relationship Counselling"
                className="w-full h-56 md:h-72 object-cover rounded-2xl"
              />

              {/* SHORT OVERVIEW */}
              <div>
                <span className="w-3 h-3 bg-green-500 rounded-full block mb-3"></span>

                <h3 className="text-2xl md:text-3xl font-semibold text-gray-900">
                  Relationship Counselling
                </h3>

                <p className="text-gray-600 mt-3 text-base leading-relaxed">
                  At Care Corner, Dr. Nida Maqbool offers relationship
                  counselling to help couples and individuals navigate the
                  complexities of their relationships{" "}
                  <span
                    className="text-blue-900 cursor-pointer underline"
                    onClick={() => setShow1(!show1)}
                  >
                    {show1 ? "hide details ↑" : "view more... ↓"}
                  </span>
                </p>

                {/* TAGS */}
                <div className="flex flex-wrap gap-2 mt-5">
                  <span className="text-gray-700 bg-white border px-3 py-1 rounded-full text-sm">
                    Calm Minds
                  </span>
                  <span className="text-gray-700 bg-white border px-3 py-1 rounded-full text-sm">
                    Healing
                  </span>
                  <span className="text-gray-700 bg-white border px-3 py-1 rounded-full text-sm">
                    Professional Support
                  </span>
                </div>
              </div>
            </div>

            {/* FULL DETAIL SECTION */}
            {show1 && (
              <div className="mt-10 max-w-4xl mx-auto space-y-8 text-gray-700 leading-[1.85]">
                <p>
                  At Care Corner, Dr. Nida Maqbool offers relationship
                  counselling to help couples and individuals navigate the
                  complexities of their relationships. As an experienced
                  psychologist, she creates a safe, understanding, and
                  non-judgmental space where clients can explore their feelings,
                  address conflicts, and work toward building healthier, more
                  fulfilling connections with their partners.
                </p>

                <div>
                  <h2 className="text-xl font-semibold text-gray-900 mb-2">
                    Understanding Unique Needs
                  </h2>
                  <p>
                    Every relationship has its own set of strengths and
                    challenges. The approach at Care Corner is rooted in
                    understanding the specific dynamics of each partnership.
                    Sessions are tailored to the unique needs of each client,
                    whether they are dealing with communication issues, trust
                    concerns, intimacy, or simply seeking to reconnect with
                    their partners.
                  </p>
                </div>

                <div>
                  <h2 className="text-xl font-semibold text-gray-900 mb-2">
                    A Safe Space for Open Communication
                  </h2>
                  <p>
                    Care Corner offers a confidential and empathetic environment
                    where couples can openly express their thoughts and
                    feelings. The counselling process facilitates conversations
                    that encourage open communication and emotional
                    vulnerability, helping partners understand each other
                    better.
                  </p>
                </div>

                <div>
                  <h2 className="text-xl font-semibold text-gray-900 mb-2">
                    Evidence-Based Approaches for Lasting Change
                  </h2>
                  <p>
                    In the sessions, evidence-based therapeutic techniques, such
                    as Cognitive Behavioral Therapy (CBT) and Emotionally
                    Focused Therapy (EFT), are used to address relationship
                    challenges effectively. These methods enable partners to
                    identify negative patterns, change unhelpful behaviors, and
                    develop healthier ways of interacting. By focusing on both
                    individual growth and relationship dynamics, clients build a
                    stronger foundation for a fulfilling relationship.
                  </p>
                </div>

                <div>
                  <h2 className="text-xl font-semibold text-gray-900 mb-2">
                    Reconnecting and Rebuilding Trust
                  </h2>
                  <p>
                    Rebuilding trust and intimacy is a core aspect of
                    relationship counselling at Care Corner. The process guides
                    couples through understanding and healing past wounds,
                    allowing them to move forward together. Whether it involves
                    rebuilding trust after a betrayal or reigniting the spark in
                    a long-term relationship, the compassionate approach ensures
                    that both partners feel valued and understood throughout
                    their journey.
                  </p>
                </div>

                <div>
                  <h2 className="text-xl font-semibold text-gray-900 mb-2">
                    Empowering Clients for a Better Tomorrow
                  </h2>
                  <p>
                    Relationship counselling at Care Corner goes beyond
                    resolving conflicts—it’s about empowering clients to create
                    a better future together. Couples receive tools and
                    strategies they can use beyond the sessions, fostering
                    resilience and ongoing growth. With the right guidance, they
                    can rediscover the love and companionship that brought them
                    together, building a relationship that is stronger,
                    healthier, and more harmonious.
                  </p>
                </div>

                <div>
                  <h2 className="text-xl font-semibold text-gray-900 mb-2">
                    Rediscover Connection with Care Corner
                  </h2>
                  <p>
                    Under the expert guidance of Dr. Nida Maqbool, Care Corner
                    is dedicated to helping couples overcome challenges, deepen
                    their bonds, and embark on a journey of mutual understanding
                    and lasting love. With her support, clients can find the
                    path to a happier, more connected relationship.
                  </p>
                </div>
              </div>
            )}
          </motion.div>

          {/* service2 */}

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-50px" }}
            className="bg-gray-50 rounded-3xl p-6 md:p-10 shadow-sm border border-gray-200 transform-gpu will-change-transform"
          >
            <div className="grid md:grid-cols-2 gap-10 items-center">
              {/* IMAGE */}
              <img
                loading="lazy"
                decoding="async"
                src="https://images.pexels.com/photos/4101144/pexels-photo-4101144.jpeg"
                alt="Depression"
                className="w-full h-56 md:h-72 object-cover rounded-2xl"
              />

              {/* SHORT OVERVIEW */}
              <div>
                <span className="w-3 h-3 bg-green-500 rounded-full block mb-3"></span>

                <h3 className="text-2xl md:text-3xl font-semibold text-gray-900">
                  Depression
                </h3>

                <p className="text-gray-600 mt-3 text-base leading-relaxed">
                  At Care Corner, Dr. Nida Maqbool offers specialized depression
                  treatment, guiding individuals toward renewed hope and
                  emotional well-being.{" "}
                  <span
                    className="text-blue-900 cursor-pointer underline"
                    onClick={() => setShow2(!show2)}
                  >
                    {show1 ? "hide details ↑" : "view more... ↓"}
                  </span>
                </p>

                {/* TAGS */}
                <div className="flex flex-wrap gap-2 mt-5">
                  <span className="text-gray-700 bg-white border px-3 py-1 rounded-full text-sm">
                    Calm Minds
                  </span>
                  <span className="text-gray-700 bg-white border px-3 py-1 rounded-full text-sm">
                    Healing
                  </span>
                  <span className="text-gray-700 bg-white border px-3 py-1 rounded-full text-sm">
                    Professional Support
                  </span>
                </div>
              </div>
            </div>

            {/* FULL DETAIL SECTION */}
            {show2 && (
              <div className="mt-10 max-w-4xl mx-auto space-y-8 text-gray-700 leading-[1.85]">
                <p>
                  At Care Corner, Dr. Nida Maqbool offers specialized depression
                  treatment, guiding individuals toward renewed hope and
                  emotional well-being. As a dedicated psychologist, she
                  provides a compassionate and safe environment for clients to
                  explore their feelings, understand their struggles, and embark
                  on a path of healing. Her approach focuses on helping clients
                  regain a sense of purpose and joy in their lives.
                </p>

                <div>
                  <h2 className="text-xl font-semibold text-gray-900 mb-2">
                    Understanding the Complexities of Depression
                  </h2>
                  <p>
                    Depression can manifest in various forms, from persistent
                    sadness and loss of interest in daily activities to feelings
                    of hopelessness and fatigue. At Care Corner, the treatment
                    process begins with a thorough assessment to understand the
                    specific nature and impact of each client’s depression. By
                    identifying the underlying causes and symptoms, a
                    personalized treatment plan is crafted to address the unique
                    challenges faced by each individual, ensuring a targeted and
                    effective approach to recovery.
                  </p>
                </div>

                <div>
                  <h2 className="text-xl font-semibold text-gray-900 mb-2">
                    A Safe Space for Healing
                  </h2>
                  <p>
                    Care Corner offers a non-judgmental and empathetic
                    environment where clients can openly share their thoughts
                    and emotions. This safe space encourages clients to express
                    their struggles without fear of judgment, a vital step in
                    the healing process.
                  </p>
                </div>

                <div>
                  <h2 className="text-xl font-semibold text-gray-900 mb-2">
                    Evidence-Based Techniques for Effective Management
                  </h2>
                  <p>
                    To treat depression, Care Corner employs evidence-based
                    therapeutic techniques such as Cognitive Behavioral Therapy
                    (CBT), mindfulness practices, and supportive counseling. CBT
                    is particularly effective in helping clients identify and
                    challenge negative thought patterns that contribute to their
                    depressive symptoms. Mindfulness and relaxation techniques
                    are integrated to promote a sense of calm and presence,
                    reducing the impact of overwhelming thoughts. These methods
                    work together to help clients build a healthier mindset and
                    develop more positive ways of thinking.
                  </p>
                </div>

                <div>
                  <h2 className="text-xl font-semibold text-gray-900 mb-2">
                    Empowering Clients with Coping Skills
                  </h2>
                  <p>
                    A crucial aspect of depression treatment at Care Corner is
                    equipping clients with practical coping strategies to manage
                    their emotions. This includes building self-care routines,
                    developing healthier habits, and fostering resilience
                    against future challenges. By empowering clients with tools
                    for daily life, Care Corner helps them regain control over
                    their thoughts and feelings, fostering a more positive
                    outlook.
                  </p>
                </div>

                <div>
                  <h2 className="text-xl font-semibold text-gray-900 mb-2">
                    Long-Term Support for Lasting Change
                  </h2>
                  <p>
                    The focus of depression treatment at Care Corner extends
                    beyond immediate relief. Dr. Nida Maqbool aims to provide
                    long-term support, helping clients maintain their progress
                    and continue their journey toward well-being. With a focus
                    on building self-awareness and resilience, clients are
                    empowered to create lasting change and lead a life that is
                    more balanced and fulfilling.
                  </p>
                </div>

                <div>
                  <h2 className="text-xl font-semibold text-gray-900 mb-2">
                    Rediscover Hope with Care Corner
                  </h2>
                  <p>
                    Under the compassionate guidance of Dr. Nida Maqbool, Care
                    Corner is dedicated to helping individuals overcome
                    depression and find a path to renewed hope. Through
                    personalized care and evidence-based techniques, clients can
                    move toward a brighter, more positive future, reclaiming the
                    joy and fulfillment they deserve.
                  </p>
                </div>
              </div>
            )}
          </motion.div>

          {/* servvice 3 */}

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-50px" }}
            className="bg-gray-50 rounded-3xl p-6 md:p-10 shadow-sm border border-gray-200 transform-gpu will-change-transform"
          >
            <div className="grid md:grid-cols-2 gap-10 items-center">
              {/* IMAGE */}
              <img
                loading="lazy"
                decoding="async"
                src={img2}
                alt="Depression"
                className="w-full h-56 md:h-72 object-cover rounded-2xl"
              />

              {/* SHORT OVERVIEW */}
              <div>
                <span className="w-3 h-3 bg-green-500 rounded-full block mb-3"></span>

                <h3 className="text-2xl md:text-3xl font-semibold text-gray-900">
                  Anxiety
                </h3>

                <p className="text-gray-600 mt-3 text-base leading-relaxed">
                  At Care Corner, Dr. Nida Maqbool offers anxiety management
                  services designed to help individuals regain control over
                  their lives.{" "}
                  <span
                    className="text-blue-900 cursor-pointer underline"
                    onClick={() => setShow3(!show3)}
                  >
                    {show1 ? "hide details ↑" : "view more... ↓"}
                  </span>
                </p>

                {/* TAGS */}
                <div className="flex flex-wrap gap-2 mt-5">
                  <span className="text-gray-700 bg-white border px-3 py-1 rounded-full text-sm">
                    Stress Relief
                  </span>
                  <span className="text-gray-700 bg-white border px-3 py-1 rounded-full text-sm">
                    Therapy Session
                  </span>
                  <span className="text-gray-700 bg-white border px-3 py-1 rounded-full text-sm">
                    Progress Steps
                  </span>
                </div>
              </div>
            </div>

            {/* FULL DETAIL SECTION */}
            {show3 && (
              <div className="mt-10 max-w-4xl mx-auto space-y-8 text-gray-700 leading-[1.85]">
                <p>
                  At Care Corner, Dr. Nida Maqbool offers anxiety management
                  services designed to help individuals regain control over
                  their lives. As a compassionate psychologist, she creates a
                  safe and supportive environment for clients to explore their
                  anxieties and develop effective coping strategies. Her goal is
                  to empower clients to understand and manage their anxiety,
                  fostering a sense of calm and resilience.
                </p>

                <div>
                  <h2 className="text-xl font-semibold text-gray-900 mb-2">
                    Understanding the Nature of Anxiety
                  </h2>
                  <p>
                    Anxiety can manifest in many forms, including generalized
                    anxiety disorder (GAD), social anxiety, panic attacks, and
                    phobias. Care Corner’s approach to anxiety management begins
                    with a thorough assessment to understand the nature and
                    triggers of each client’s anxiety. By identifying these
                    underlying causes, a personalized plan is developed to
                    address specific symptoms and provide targeted relief.
                  </p>
                </div>

                <div>
                  <h2 className="text-xl font-semibold text-gray-900 mb-2">
                    A Safe Space for Healing
                  </h2>
                  <p>
                    At Care Corner, clients find a non-judgmental and empathetic
                    space where they can openly discuss their worries and fears.
                    The environment is designed to help individuals feel
                    comfortable expressing their thoughts and emotions, a
                    critical step in managing anxiety. The process encourages
                    self-reflection and self-awareness, helping clients to
                    understand their anxiety patterns and begin the journey
                    toward better mental health.
                  </p>
                </div>

                <div>
                  <h2 className="text-xl font-semibold text-gray-900 mb-2">
                    Evidence-Based Techniques for Effective Management
                  </h2>
                  <p>
                    Care Corner utilizes evidence-based therapeutic methods,
                    such as Cognitive Behavioral Therapy (CBT), mindfulness
                    techniques, and relaxation exercises. CBT is particularly
                    effective in helping clients identify and challenge
                    irrational thought patterns that contribute to their
                    anxiety. Mindfulness practices and relaxation techniques are
                    integrated to help clients manage physical symptoms, such as
                    tension and rapid breathing, promoting a sense of calm and
                    control.
                  </p>
                </div>

                <div>
                  <h2 className="text-xl font-semibold text-gray-900 mb-2">
                    Building Resilience and Coping Skills
                  </h2>
                  <p>
                    A key aspect of anxiety management at Care Corner is
                    equipping clients with practical strategies to manage their
                    anxiety in daily life. This includes teaching effective
                    stress management techniques, building self-care routines,
                    and developing healthier responses to stressors. These
                    skills not only help clients overcome their current anxiety
                    but also prepare them to face future challenges with greater
                    resilience and confidence.
                  </p>
                </div>

                <div>
                  <h2 className="text-xl font-semibold text-gray-900 mb-2">
                    Empowering Clients for Long-Term Well-being
                  </h2>
                  <p>
                    The focus at Care Corner extends beyond symptom relief; it’s
                    about empowering clients to maintain their well-being in the
                    long term. By fostering a deeper understanding of their
                    anxiety and building a toolkit of coping strategies, clients
                    learn to navigate their emotions more effectively. This
                    empowers them to lead a more balanced, anxiety-free life,
                    where they can pursue their goals without being held back by
                    fear.
                  </p>
                </div>

                <div>
                  <h2 className="text-xl font-semibold text-gray-900 mb-2">
                    Find Peace with Care Corner
                  </h2>
                  <p>
                    Under the expert guidance of Dr. Nida Maqbool, Care Corner
                    is dedicated to helping individuals manage their anxiety and
                    build a life of calm and resilience. Through personalized
                    care and evidence-based methods, clients can overcome their
                    anxiety and move towards a future filled with greater peace
                    and confidence.
                  </p>
                </div>
              </div>
            )}
          </motion.div>

          {/* service 4 */}

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-50px" }}
            className="bg-gray-50 rounded-3xl p-6 md:p-10 shadow-sm border border-gray-200 transform-gpu will-change-transform"
          >
            <div className="grid md:grid-cols-2 gap-10 items-center">
              {/* IMAGE */}
              <img
                loading="lazy"
                decoding="async"
                src={img1}
                alt="Children Counselling"
                className="w-full h-56 md:h-72 object-cover rounded-2xl"
              />

              {/* SHORT OVERVIEW */}
              <div>
                <span className="w-3 h-3 bg-green-500 rounded-full block mb-3"></span>

                <h3 className="text-2xl md:text-3xl font-semibold text-gray-900">
                  Children Counselling
                </h3>

                <p className="text-gray-600 mt-3 text-base leading-relaxed">
                  Care Corner provides emotional and behavioral support for
                  children, helping them express feelings, improve confidence,
                  and thrive in school and life.{" "}
                  <span
                    className="text-blue-900 cursor-pointer underline"
                    onClick={() => setShow4(!show4)}
                  >
                    {show1 ? "hide details ↑" : "view more... ↓"}
                  </span>
                </p>

                {/* TAGS */}
                <div className="flex flex-wrap gap-2 mt-5">
                  <span className="text-gray-700 bg-white border px-3 py-1 rounded-full text-sm">
                    Emotional Support
                  </span>
                  <span className="text-gray-700 bg-white border px-3 py-1 rounded-full text-sm">
                    Play Therapy
                  </span>
                  <span className="text-gray-700 bg-white border px-3 py-1 rounded-full text-sm">
                    Child Development
                  </span>
                </div>
              </div>
            </div>

            {/* FULL DETAILS SECTION */}
            {show4 && (
              <div className="mt-10 max-w-4xl mx-auto space-y-8 text-gray-700 leading-[1.85]">
                <p>
                  Children often struggle to express their emotions clearly, and
                  their challenges may appear through behaviors like aggression,
                  withdrawal, lack of focus, or social difficulties. At Care
                  Corner, Dr. Nida Maqbool provides empathetic and
                  child-friendly therapy to help children express feelings in a
                  healthy way and develop emotional strength.
                </p>

                <div>
                  <h2 className="text-xl font-semibold text-gray-900 mb-2">
                    Understanding a Child’s Emotional World
                  </h2>
                  <p>
                    Every child experiences emotions differently. We begin by
                    understanding the child’s inner world — their fears,
                    anxieties, friendships, school pressures, and family
                    experiences. This helps in building a personalized
                    therapeutic approach suitable for their developmental needs.
                  </p>
                </div>

                <div>
                  <h2 className="text-xl font-semibold text-gray-900 mb-2">
                    A Safe and Welcoming Space for Expression
                  </h2>
                  <p>
                    Children often communicate through actions rather than
                    words. The calm and friendly environment at Care Corner
                    encourages them to speak freely through storytelling,
                    drawings, roleplay, and interactive activities — improving
                    their confidence and emotional clarity.
                  </p>
                </div>

                <div>
                  <h2 className="text-xl font-semibold text-gray-900 mb-2">
                    Play Therapy and Evidence-Based Support
                  </h2>
                  <p>
                    Play therapy allows children to express worries through
                    imagination, helping them deal with issues like anxiety,
                    bullying, low self-esteem, grief, and anger. We use proven
                    methods including:
                    <br />• CBT for children
                    <br />• Behavior modification techniques
                    <br />• Social and communication skill development
                  </p>
                </div>

                <div>
                  <h2 className="text-xl font-semibold text-gray-900 mb-2">
                    Building Confidence and Problem-Solving Skills
                  </h2>
                  <p>
                    Therapy enables children to manage tough emotions, build
                    resilience, develop focus, and strengthen peer
                    relationships. Parents also receive guidance to better
                    understand and support their child’s mental growth.
                  </p>
                </div>

                <div>
                  <h2 className="text-xl font-semibold text-gray-900 mb-2">
                    Support for Long-Term Wellbeing
                  </h2>
                  <p>
                    Our goal is to foster a healthy emotional foundation so
                    children can grow into strong, confident individuals.
                    Consistent care ensures lasting progress in school
                    performance, home behavior, and overall happiness.
                  </p>
                </div>

                <div>
                  <h2 className="text-xl font-semibold text-gray-900 mb-2">
                    Happy Childhood Starts Here
                  </h2>
                  <p>
                    Under the care of Dr. Nida Maqbool, every child receives
                    nurturing support to overcome emotional struggles and build
                    a future filled with joy, learning, and confidence.
                  </p>
                </div>
              </div>
            )}
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Services;
