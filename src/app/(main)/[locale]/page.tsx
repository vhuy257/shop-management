import ListArticles from "@/components/ListArticles/ListArticles";
import ListItems from "@/components/ListItems/ListItems";
import { useTranslations } from "next-intl";

export default function Home({params: { locale }}: any) {
  const t = useTranslations("Index")

  const listTranslate = {
    title: t("title")
  }

  return (
    <>
      {/* <ListArticles translate={listTranslate}/> */}
      <ListItems translate={listTranslate}/>
    </>
  )
}
