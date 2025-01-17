import Link from "next/link";
import JobListingContainer from "./components/JobListingContainer";

async function getJobs() {
  const res = await fetch(`${process.env.API_URL}/jobs`, {
    next: { revalidate: 60 }
  });

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

export default async function JobsPage() {
  return (
    <div className="container mx-auto mt-2">
      <Link href="/job_offers" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">求人一覧</Link>
    </div>
  )
}
