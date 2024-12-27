import JobDetail from "@/app/components/JobDetail"

async function getJobDetail(id: string) {
  const jobs = {
    1: {
      id: 1,
      title: "医療事務／未経験OK！／研修サポートあり／完全週休2日制",
      company: "株式会社日本ビジネスデータープロセッシングセンター",
      location: "愛知県 名古屋市 桜山駅",
      salary: "月給197.2万円～ / 昇給あり",
      employmentType: "正社員",
      tags: ["未経験OK", "コロナ感染対策あり", "Wワーク OK"],
    },
    2: {
      id: 2,
      title: "マーケティング／未経験OK！／研修サポートあり／完全週休2日制",
      company: "株式会社キャリアインデックス",
      location: "東京都港区",
      salary: "月給197.2万円～ / 昇給あり",
      employmentType: "正社員",
      tags: ["未経験OK", "コロナ感染対策あり", "Wワーク OK"],
    }
  }

  return jobs[id]
}


export default async function JobPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const job = await getJobDetail(id)
  return <JobDetail job={job} />
}
