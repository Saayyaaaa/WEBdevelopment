from django.urls import path
# from .views import company_list, get_company, vacancies_by_company, vacancy_list, get_vacancy, top_ten_vacancies
# from .views import CompanyListAPIView, CompanyDetailAPIView
from .views import CompanyList, GetCompanyDetail

urlpatterns = [
    path('company/', CompanyList.as_view()),
    path('company/<int:pk>/', GetCompanyDetail.as_view()),

    # path('company/', CategoryListAPIView.as_view()),
    # path('company/<int:id>/', CompanyDetailAPIView.as_view()),

    # path('company/', company_list),
    # path('company/<int:id>/', get_company),
    # path('vacancy/<int:id>/companies/', vacancies_by_company),
    # path('vacancy/', vacancy_list),
    # path('vacancy/<int:id>/', get_vacancy),
    # path('vacancy/top-ten/', top_ten_vacancies)
]
