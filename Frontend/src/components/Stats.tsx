const Stats = () => {
  const stats = [
    { value: "10M+", label: "Requests per day" },
    { value: "99.9%", label: "Uptime SLA" },
    { value: "50ms", label: "P99 Latency" },
    { value: "500+", label: "Enterprise customers" },
  ];

  return (
    <section className="py-16 lg:py-24 bg-bento-mint">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center fade-in-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-bento-dark mb-2">
                {stat.value}
              </div>
              <div className="text-bento-dark/70 font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
