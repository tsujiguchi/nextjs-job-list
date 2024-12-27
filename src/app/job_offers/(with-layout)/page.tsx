import Link from 'next/link'

async function getJobs() {
  return [
      {
        id: 1,
        title: "医療事務／未経験OK！／研修サポートあり／完全週休2日制",
        company: "株式会社日本ビジネスデータープロセッシングセンター",
        location: "愛知県 名古屋市 桜山駅",
        salary: "月給197.2万円～ / 昇給あり",
        employmentType: "正社員",
        tags: ["未経験OK", "コロナ感染対策あり", "Wワーク OK"],
      },
      {
        id: 2,
        title: "マーケティング／未経験OK！／研修サポートあり／完全週休2日制",
        company: "株式会社キャリアインデックス",
        location: "東京都港区",
        salary: "月給197.2万円～ / 昇給あり",
        employmentType: "正社員",
        tags: ["未経験OK", "コロナ感染対策あり", "Wワーク OK"],
      },
    ]
}

export default async function JobOffersPage() {
  const jobs = await getJobs()

  return (
    <div className="w-full max-w-6xl mx-auto p-4">
      <div className="grid gap-4">
        {jobs.map((job) => (
          <Link
            key={job.id}
            href={`/job_offers/${job.id}`}
            className="block bg-white rounded-lg shadow p-4 hover:shadow-lg transition-shadow"
          >
            <h3 className="text-lg font-bold mb-2">{job.title}</h3>
          </Link>
        ))}
      </div>
    </div>
  )
}
