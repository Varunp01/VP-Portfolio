import { useState } from "react";

const courses = [
  {
    id: "level-1",
    level: 1,
    slug: "foundation-crystal-healing",
    title: "Foundation Crystal Healing Course",
    category: "Beginner",
    durationHours: 10,
    basePrice: 2100,
    currency: "INR",
    prerequisites: [],
    prerequisitesText: "None - Perfect for beginners",
    certificate: "Foundation Level Certificate in Crystal Healing",

    variants: [
      {
        id: "free-healing",
        label: "Free Healing",
        price: 0,
        type: "free"
      },
      {
        id: "paid-healing-1",
        label: "Paid Healing 1",
        price: 2100,
        type: "paid"
      },
      {
        id: "paid-healing-2",
        label: "Paid Healing 2",
        price: 2100,
        type: "paid"
      }
    ],

    learningOutcomes: [
      "History and origins of crystal healing",
      "Understanding energy, vibrations, and frequencies",
      "Basic chakra system and crystal correspondences",
      "Crystal selection, cleansing, and care",
      "Basic healing techniques and layouts",
      "Self-healing practices"
    ],

    crystalKit: {
      id: "kit-level-1",
      title: "Level 1 Crystal Healing Kit",
      price: 1500,
      currency: "INR",
      contents: [
        "Clear Quartz (Master Healer)",
        "Amethyst (Crown/Third Eye Chakra)",
        "Rose Quartz (Heart Chakra)",
        "Citrine (Solar Plexus Chakra)",
        "Green Aventurine (Heart Chakra)",
        "Black Tourmaline (Protection)",
        "Selenite wand (Cleansing)",
        "Crystal information cards",
        "Velvet storage pouch"
      ]
    }
  },

  {
    id: "level-2",
    level: 2,
    slug: "intermediate-crystal-healing",
    title: "Intermediate Crystal Healing Course",
    category: "Intermediate",
    durationHours: 10,
    basePrice: 5100,
    currency: "INR",
    prerequisites: ["level-1"],
    prerequisitesText: "Completion of Level 1 Crystal Healing Course",
    certificate: "Intermediate Level Certificate in Crystal Healing",

    variants: [
      {
        id: "free-healing",
        label: "Free Healing",
        price: 0,
        type: "free"
      },
      {
        id: "paid-healing-1",
        label: "Paid Healing 1",
        price: 5100,
        type: "paid"
      },
      {
        id: "paid-healing-2",
        label: "Paid Healing 2",
        price: 5100,
        type: "paid"
      }
    ],

    learningOutcomes: [
      "Advanced crystal properties and combinations",
      "Crystal grids and sacred geometry",
      "Advanced chakra work and energy assessment",
      "Professional healing layouts",
      "Crystal elixirs and essences",
      "Client consultation and ethics"
    ],

    crystalKit: {
      id: "kit-level-2",
      title: "Level 2 Crystal Healing Kit",
      price: 3500,
      currency: "INR",
      contents: [
        "Labradorite (Transformation)",
        "Fluorite (Mental clarity)",
        "Carnelian (Sacral Chakra)",
        "Lapis Lazuli (Throat Chakra)",
        "Malachite (Heart healing)",
        "Pyrite (Manifestation)",
        "Hematite (Grounding)",
        "Crystal pendulum",
        "Grid template sheets",
        "Professional guide",
        "Wooden storage box"
      ]
    }
  },

  {
    id: "level-3",
    level: 3,
    slug: "advanced-master-crystal-healing",
    title: "Advanced Master Crystal Healing Course",
    category: "Master",
    durationHours: 10,
    basePrice: 9000,
    currency: "INR",
    prerequisites: ["level-1", "level-2"],
    prerequisitesText: "Completion of Level 1 and Level 2 Crystal Healing Courses",
    certificate:
      "Master Level Certificate in Crystal Healing & Teaching Qualification",

    variants: [
      {
        id: "free-healing",
        label: "Free Healing",
        price: 0,
        type: "free"
      },
      {
        id: "paid-healing-1",
        label: "Paid Healing 1",
        price: 9000,
        type: "paid"
      },
      {
        id: "paid-healing-2",
        label: "Paid Healing 2",
        price: 9000,
        type: "paid"
      }
    ],

    learningOutcomes: [
      "Master level crystal knowledge (50+ crystals)",
      "Advanced energy work and psychic techniques",
      "Distance and remote healing",
      "Advanced crystal grids and manifestation",
      "Teaching and mentorship skills",
      "Professional business practices"
    ],

    crystalKit: {
      id: "kit-level-3",
      title: "Level 3 Master Crystal Healing Kit",
      price: 8500,
      currency: "INR",
      contents: [
        "Moldavite (Transformation catalyst)",
        "Phenacite (High frequency)",
        "Lemurian Seed Crystal (Ancient wisdom)",
        "Rainbow Fluorite (Multi-dimensional)",
        "Sugilite (Soul healing)",
        "Tanzanite (Spiritual communication)",
        "Master Healer Quartz point",
        "Crystal singing bowl",
        "Advanced grid templates",
        "Certificate templates",
        "Luxury presentation box"
      ]
    }
  }
];

function Course() {
  const [activeCourse, setActiveCourse] = useState(null);
  const [selectedVariant, setSelectedVariant] = useState(null);
  const [selectedKit, setSelectedKit] = useState(null);

  const coursePrice = selectedVariant?.price || 0;
  const kitPrice = selectedKit?.price || 0;
  const totalPrice = coursePrice + kitPrice;

  return (
    <>
      <div className="max-w-7xl mx-auto px-6 py-16 bg-[#F0F0F7] pt-32">

        {/* HEADER */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-3 text-left text-[#13343B]">
            Crystal Healing Courses
          </h1>
          <h2 className="text-3xl font-semibold text-[#21808D]">
            Three-Level Professional Training Program
          </h2>
          <p className=" mx-auto mt-4 text-black">
            Master the art of crystal healing through our comprehensive
            3-level certification program. Each course builds upon the
            previous level.
          </p>

          <div className="mt-6 items-center gap-2 bg-[#EDE4E9] text-yellow-800 px-4 py-2 rounded-md text-sm border-2 border-[#A84B2F]">
            <p className="text-lg font-semibold text-[#A84B2F] my-2">⚠️ Important Notice</p>
            <p className="text-sm font-semibold text-black my-4">Crystal Kits are purchased separately and are not included in the course fee. Each course comes with a specially curated crystal kit that can be purchased at an additional cost.</p>
          </div>
        </div>

        {/* TWO COLUMN LAYOUT */}
        <div className="flex flex-col md:flex-row gap-10 items-start">

          {/* LEFT: ACCORDION */}
          <style>{`
            .accordion-body {
              animation: slideFade 0.35s ease forwards;
            }

            @keyframes slideFade {
              from { opacity: 0; transform: translateY(-6px); }
              to { opacity: 1; transform: translateY(0); }
            }

            .course-card {
              transition: transform 0.25s ease, box-shadow 0.25s ease;
            }

            .course-card:hover {
              transform: translateY(-2px);
              box-shadow: 0 12px 28px rgba(0,0,0,0.08);
            }

            .variant-row {
              transition: all 0.2s ease;
            }

            .variant-row:hover {
              transform: scale(1.01);
            }

            .kit-toggle {
              transition: all 0.25s ease;
            }
          `}</style>

          <div className="md:w-1/2 space-y-4">

            {courses.map(course => {
              const isActive = activeCourse === course.id;
              const kitSelected = selectedKit?.courseId === course.id;
              const variantSelectedForThisCourse =
                selectedVariant?.courseId === course.id;

              return (
                <div
                  key={course.id}
                  className="course-card border rounded-xl overflow-hidden bg-white"
                >

                  {/* HEADER */}
                  <button
                    onClick={() => {
                      setActiveCourse(isActive ? null : course.id);
                      setSelectedKit(null);
                    }}
                    className="w-full flex justify-between items-center px-6 py-4 bg-[#21808D] hover:bg-[#116975]"
                  >
                    <div className="text-left text-white flex justify-between w-full pr-5">
                      <h3 className="font-semibold text-lg">Level {course.level}: {course.title}</h3>
                      <p className="text-xs font-semibold bg-[#4D99A3] px-2 py-1 rounded-full">
                        {course.category} Level
                        {/* Level {course.level} • {course.category} • {course.durationHours} Hours */}
                      </p>
                    </div>
                    <span className="text-2xl font-light text-white">
                      {isActive ? "−" : "+"}
                    </span>
                  </button>

                  {/* BODY */}
                  {isActive && (
                    <div className="accordion-body p-6 space-y-6">

                      {/* Summary */}
                      <div className="flex bg-[#EBF9FA] rounded-lg px-3 justify-around items-center flex-wrap text-gray-500 text-xs">

                        <h4 className="font-medium mb-2 mx-2">⏱️ Duration: {course.durationHours} Hours</h4>
                        <h4 className="font-medium mb-2 mx-2">💰 Course Fee: ₹{course.basePrice}</h4>
                        <h4 className="font-medium mb-2 mx-2">💎 Crystal Kit: ₹{course.crystalKit.price}</h4>
                        <h4 className="font-medium mb-2 mx-2">📊 Total Investment: ₹{course.basePrice + course.crystalKit.price}</h4>
                        <h4 className="font-medium mb-2 mx-2">✅ Prerequisites: {course.prerequisitesText}</h4>
                      </div>

                      {/* LEARNING OUTCOMES */}
                      <div>
                        <h4 className="font-medium mb-2">What You’ll Learn</h4>
                        <ul className="list-none list-inside text-sm text-gray-600 space-y-1">
                          {course.learningOutcomes.map((item, i) => (
                            <li key={i}>📚 {item}</li>
                          ))}
                        </ul>
                      </div>

                      {/* VARIANTS */}
                      <div>
                        <h4 className="font-medium mb-2">Choose a Variant</h4>

                        <div className="space-y-2">
                          {course.variants.map(variant => (
                            <label
                              key={variant.id}
                              className={`variant-row flex justify-between items-center border rounded-lg px-4 py-3 cursor-pointer
                        ${selectedVariant?.id === variant.id
                                  ? "border-black bg-gray-50"
                                  : "hover:border-black"
                                }`}
                            >
                              <div>
                                <p className="font-medium">{variant.label}</p>
                                <p className="text-xs text-gray-500 capitalize">
                                  {variant.type} option
                                </p>
                              </div>

                              <span className="font-semibold">₹{variant.price}</span>

                              <input
                                type="radio"
                                name={`course-${course.id}`}
                                className="hidden"
                                onChange={() => {
                                  setSelectedVariant({
                                    id: variant.id,
                                    courseId: course.id,
                                    courseTitle: course.title,
                                    variantLabel: variant.label,
                                    price: variant.price
                                  });
                                  setSelectedKit(null);
                                }}
                              />
                            </label>
                          ))}
                        </div>
                      </div>

                      {/* CERTIFICATE */}
                      <div className="text-sm text-gray-700">
                        <strong>🏆 Certificate:</strong> {course.certificate}
                      </div>

                      {/* CRYSTAL KIT UPSELL */}
                      <div className="border-t pt-4">
                        <div className="flex justify-between items-center mb-3">
                          <div>
                            <h4 className="font-medium">{course.crystalKit.title}</h4>
                            <p className="text-sm text-gray-500">
                              ₹{course.crystalKit.price} • Purchased separately
                            </p>
                          </div>

                          <button
                            type="button"
                            disabled={!variantSelectedForThisCourse}
                            onClick={() =>
                              setSelectedKit(
                                kitSelected
                                  ? null
                                  : {
                                    courseId: course.id,
                                    title: course.crystalKit.title,
                                    price: course.crystalKit.price
                                  }
                              )
                            }
                            className={`kit-toggle px-4 py-2 rounded-full text-sm border
                      ${!variantSelectedForThisCourse
                                ? "opacity-50 cursor-not-allowed"
                                : kitSelected
                                  ? "bg-black text-white border-black"
                                  : "hover:border-black"
                              }`}
                          >
                            {kitSelected ? "Remove Kit" : "Add Kit"}
                          </button>
                        </div>

                        <ul className="list-none list-inside text-sm text-gray-600 space-y-1">
                          {course.crystalKit.contents.map((item, i) => (
                            <li key={i}>💎 {item}</li>
                          ))}
                        </ul>
                      </div>

                      {/* PRICE SUMMARY */}
                      {variantSelectedForThisCourse && (
                        <div className="bg-gray-50 rounded-lg p-4 text-sm text-gray-700">
                          <p><strong>Course:</strong> ₹{coursePrice}</p>
                          {kitSelected && (
                            <p><strong>Crystal Kit:</strong> ₹{kitPrice}</p>
                          )}
                          <p className="mt-2 font-semibold">
                            Total: ₹{totalPrice}
                          </p>
                        </div>
                      )}

                    </div>
                  )}
                </div>
              );
            })}

          </div>

          {/* RIGHT: FORM */}
          <div className="md:w-1/2 border rounded-xl p-8 bg-gray-50">
            <h3 className="text-xl font-semibold mb-4">Proceed to Payment</h3>

            {selectedVariant && (
              <div className="mb-6 text-sm text-gray-700 space-y-1">
                <p><strong>Course:</strong> {selectedVariant.courseTitle}</p>
                <p><strong>Variant:</strong> {selectedVariant.variantLabel}</p>
                <p><strong>Course Price:</strong> ₹{coursePrice}</p>
                {selectedKit && <p><strong>Crystal Kit:</strong> ₹{kitPrice}</p>}
                <hr />
                <p className="font-semibold text-base">Total: ₹{totalPrice}</p>
              </div>
            )}

            <form className="space-y-5 p-8 rounded-2xl mx-auto">

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#21808D] focus:outline-none transition"
                  placeholder="First Name *"
                />
                <input
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#21808D] focus:outline-none transition"
                  placeholder="Last Name *"
                />
              </div>

              <input
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#21808D] focus:outline-none transition"
                placeholder="Email *"
                type="email"
              />

              <div className="flex gap-2">
                <span className="px-4 py-3 bg-gray-100 border border-gray-300 rounded-lg text-gray-700 select-none">
                  +91
                </span>
                <input
                  className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#21808D] focus:outline-none transition"
                  placeholder="Phone Number *"
                  type="tel"
                />
              </div>

              <textarea
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#21808D] focus:outline-none transition resize-none"
                placeholder="Address *"
                rows={3}
              />

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#21808D] focus:outline-none transition"
                  placeholder="City *"
                />
                <input
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#21808D] focus:outline-none transition"
                  defaultValue="India"
                />
              </div>

              <button
                type="button"
                className="w-full bg-[#21808D] text-white font-semibold py-3 rounded-lg hover:bg-[#21808D] transition transform hover:scale-105"
              >
                Proceed to Payment
              </button>
            </form>

          </div>

        </div>


      </div>
    </>
  )
}

export default Course