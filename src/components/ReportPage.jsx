import React from "react";
import PropTypes from "prop-types";

/**
 * Local Card primitives — minimal replacement for shadcn/ui `Card`.
 * You can swap these with your design‑system components later.
 */
function Card({ children }) {
  return (
    <div className="rounded-xl border bg-white dark:bg-gray-800 shadow-sm">
      {children}
    </div>
  );
}
function CardContent({ children, className = "" }) {
  return <div className={`p-6 ${className}`}>{children}</div>;
}

/**
 * ReportPage component – shows a three‑part technical analysis report.
 *
 * Props
 * @param {string}   conclusion              – High‑level finding.
 * @param {{ title:string, description:string }[]} [nextSteps=[]]
 *                                          – Action items with their explanations.
 * @param {{ title:string, description:string }[]} [analysisSteps=[]]
 *                                          – Ordered analysis stages.
 */
export default function ReportPage({
  conclusion =
    "The experiment confirms a 12% performance uplift with the new caching strategy.",
  nextSteps = [
    {
      title: "Roll‑out A/B test",
      description: "Launch to 10% of traffic for 7 days.",
    },
  ],
  analysisSteps = [
    {
      title: "Data Collection",
      description: "Captured 1M requests across peak hours.",
    },
    {
      title: "Statistical Validation",
      description: "Applied Mann‑Whitney U test (p < 0.05).",
    },
    {
      title: "Impact Projection",
      description: "Estimated annual cost savings of USD 180K.",
    },
  ],
}) {
  const nextStepsTitle = nextSteps.length === 1 ? "Next Step" : "Next Steps";

  return (
    <div className="mx-auto max-w-5xl p-6 space-y-8">
      {/* Conclusion Section */}
      <Card>
        <CardContent className="prose lg:prose-lg">
          <h2 className="mb-2 text-xl font-semibold">Conclusion</h2>
          <p>{conclusion}</p>
        </CardContent>
      </Card>

      {/* Next Steps Section */}
      <Card>
        <CardContent className="prose lg:prose-lg">
          <h2 className="mb-2 text-xl font-semibold">{nextStepsTitle}</h2>
          {nextSteps.length ? (
            <ol className="list-decimal pl-6 space-y-4">
              {nextSteps.map((step, idx) => (
                <li key={idx} className="ms-1">
                  <h3 className="text-lg font-medium leading-tight">
                    {step.title}
                  </h3>
                  <p className="mt-1 text-base text-gray-700 dark:text-gray-300">
                    {step.description}
                  </p>
                </li>
              ))}
            </ol>
          ) : (
            <p className="italic text-gray-500">No next steps specified.</p>
          )}
        </CardContent>
      </Card>

      {/* Analysis Section */}
      <Card>
        <CardContent className="prose lg:prose-lg">
          <h2 className="mb-4 text-xl font-semibold">Analysis</h2>
          <ol className="relative border-s border-gray-300">
            {analysisSteps.length ? (
              analysisSteps.map((item, idx) => (
                <li key={idx} className="mb-10 ms-6">
                  {/* Timeline bullet */}
                  <span className="absolute -start-3 flex h-6 w-6 items-center justify-center rounded-full bg-blue-600 dark:bg-blue-500 ring-8 ring-white dark:ring-gray-900" />
                  <h3 className="text-lg font-medium leading-tight">
                    {idx + 1}. {item.title}
                  </h3>
                  <p className="mt-1 text-base text-gray-700 dark:text-gray-300">
                    {item.description}
                  </p>
                </li>
              ))
            ) : (
              <li className="ms-6 italic text-gray-500">No analysis steps provided.</li>
            )}
          </ol>
        </CardContent>
      </Card>
    </div>
  );
}

ReportPage.propTypes = {
  conclusion: PropTypes.string,
  nextSteps: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
    })
  ),
  analysisSteps: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
    })
  ),
};

/**
 * Example Usage – sanity check:
 * <ReportPage />
 */
