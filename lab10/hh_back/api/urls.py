from django.urls import path
from .views import CompanyList, GetCompanyDetail, VacanciesByCompanyList, VacancyList, GetVacancyDetail
from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView

urlpatterns = [
    path('login/', TokenObtainPairView.as_view()),
    path('refresh/', TokenRefreshView.as_view()),
    path('company/', CompanyList.as_view()),
    path('company/<int:pk>/', GetCompanyDetail.as_view()),
    path('vacancy/<int:pk>/companies/', VacanciesByCompanyList.as_view()),
    path('vacancy/', VacancyList.as_view()),
    path('vacancy/<int:pk>/', GetVacancyDetail.as_view()),

    # path('company/', CategoryListAPIView.as_view()),
    # path('company/<int:id>/', CompanyDetailAPIView.as_view()),

    # path('company/', company_list),
    # path('company/<int:id>/', get_company),
    # path('vacancy/<int:id>/companies/', vacancies_by_company),
    # path('vacancy/', vacancy_list),
    # path('vacancy/<int:id>/', get_vacancy),
    # path('vacancy/top-ten/', top_ten_vacancies)
]
