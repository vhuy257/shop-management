import ListArticles from "@/components/ListArticles/ListArticles";
import useTranslation from "next-translate/useTranslation";
import Test from "@/components/Test/Test";

export default function Home() {
  const { t } = useTranslation("common")

  return (
    <>
      {t("title")}
      <Test />
      <ListArticles />
    </>
  )
}
